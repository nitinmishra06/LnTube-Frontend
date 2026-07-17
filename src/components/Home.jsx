import { Header } from "./Header";
import "./Style/Home.css";
import homeImage from "../assets/home.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [streak, setStreak] = useState(23);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login", { replace: true });
        }
    }, [navigate]);

    function resetStreak() {
        setStreak(0);
    }

    return (
        <>
            <Header />

            <section className="hero">
                <div className="hero-left">
                    <h1>
                        No more distractions
                        <br />
                        from random videos.
                        <br />
                        <span>Just learn what you want.</span>
                    </h1>

                    <p className="hero-text">
                        Turn any YouTube playlist into a focused learning experience.
                        Track your progress, take notes and stay consistent.
                    </p>
                </div>

                <div className="hero-right">
                    <img src={homeImage} alt="LearnTube" />
                </div>
            </section>

            <section className="stats">
                <h2>Your Learning Progress</h2>

                <div className="stats-container">
                    <div className="card">
                        <h3>Total Hours Learned</h3>

                        <div className="hours">128.7</div>

                        <p className="hours-text">hours learned</p>

                        <div className="time-stats">
                            <div className="time-box">
                                <span>Today</span>
                                <h4>2.4h</h4>
                            </div>

                            <div className="time-box">
                                <span>This Week</span>
                                <h4>13.6h</h4>
                            </div>

                            <div className="time-box">
                                <span>This Month</span>
                                <h4>46.2h</h4>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>🔥 Learning Streak</h3>

                        <div className="streak-circle">
                            <span>{streak}</span>
                        </div>

                        <p>days</p>

                        <button onClick={resetStreak} className="reset-btn">
                            Reset Streak
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}