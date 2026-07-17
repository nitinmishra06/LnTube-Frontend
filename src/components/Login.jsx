import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";
import "./Style/Login.css";

export function Login() {
   

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
     useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

        navigate("/");

    }

}, [navigate]);

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            if (!isLogin) {

                if (formData.password !== formData.confirmPassword) {

                    toast.error("Passwords do not match");

                    return;

                }

                const response = await api.post("/auth/signup", {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                });

                toast.success(response.data.message);

                setIsLogin(true);

                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });

            }

            else {

                const response = await api.post("/auth/login", {
                    email: formData.email,
                    password: formData.password,
                });

                localStorage.setItem("token", response.data.token);

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );

                toast.success(response.data.message);

                navigate("/");

            }

        }

        catch (err) {

            toast.error(
                err.response?.data?.message || "Something went wrong"
            );

        }

    }

    return (

        <div className="login-page">

            <div className="login-card">

                <h1>LearnTube</h1>

                <p>Learn without distractions.</p>

                <div className="tabs">

                    <button
                        type="button"
                        className={isLogin ? "active" : ""}
                        onClick={() => setIsLogin(true)}
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className={!isLogin ? "active" : ""}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    {!isLogin && (

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {!isLogin && (

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                    )}

                    <button
                        className="submit-btn"
                        type="submit"
                    >
                        {isLogin ? "Sign In" : "Create Account"}
                    </button>

                </form>

            </div>

        </div>

    );

}