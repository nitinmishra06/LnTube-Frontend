import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { Header } from "./Header";
import "./Style/Profile.css";

export function Profile() {

    const navigate = useNavigate();

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {

        getProfile();
        getQuote();

    }, []);

    async function getProfile() {

        try {

            const response = await api.get("/auth/profile");

            setUser(response.data);

        }

        catch (err) {

            console.log(err);

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            navigate("/login");

        }

    }

    async function getQuote() {

        try {

            const response = await fetch("https://dummyjson.com/quotes/random");

            const data = await response.json();

            setQuote(data.quote);
            setAuthor(data.author);

        }

        catch (err) {

            console.log(err);

        }

    }

    function logout() {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    }

    return (

        <>
            <Header />

            <section className="profile-page">

                <div className="profile-card">

                    <img
                        src="https://i.pinimg.com/1200x/3a/23/67/3a23672dc5c6cefc74da1e93ed7677f5.jpg"
                        alt="Profile"
                        className="profile-img"
                    />

                    <h2>{user.name}</h2>

                    <p>{user.email}</p>

                    <button
                        className="logout-btn"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

                <div className="stats-grid">

                    <div className="stat-card">
                        <h1>128.4</h1>
                        <span>Total Hours</span>
                    </div>

                    <div className="stat-card">
                        <h1>23 🔥</h1>
                        <span>Current Streak</span>
                    </div>

                    <div className="stat-card">
                        <h1>46</h1>
                        <span>Notes Created</span>
                    </div>

                    <div className="stat-card">
                        <h1>81</h1>
                        <span>Videos Completed</span>
                    </div>

                </div>

                <div className="quote-card">

                    <h2>💭 Quote of the Day</h2>

                    <p className="quote">

                        "{quote}"

                    </p>

                    <span className="author">

                        — {author}

                    </span>

                </div>

            </section>

        </>

    );

}