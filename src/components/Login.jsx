import { useState } from "react";
import "./Style/Login.css";

export function Login() {

    const [isLogin, setIsLogin] = useState(true);

    return (

        <div className="login-page">

            <div className="login-card">

                <h1>LearnTube</h1>

                <p>Learn without distractions.</p>

                <div className="tabs">

                    <button
                        className={isLogin ? "active" : ""}
                        onClick={() => setIsLogin(true)}
                    >
                        Sign In
                    </button>

                    <button
                        className={!isLogin ? "active" : ""}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>

                </div>

                <form>

                    {!isLogin && (

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                    )}

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    {!isLogin && (

                        <input
                            type="password"
                            placeholder="Confirm Password"
                        />

                    )}

                    <button
                        className="submit-btn"
                        type="submit"
                    >

                        {isLogin ? "Sign In" : "Create Account"}

                    </button>

                </form>

                <div className="divider">

                    <span>OR</span>

                </div>

                <button className="google-btn">

                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt=""
                    />

                    Continue with Google

                </button>

            </div>

        </div>

    );

}