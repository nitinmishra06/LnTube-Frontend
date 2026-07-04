import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./Style/SingleNote.css";

export function SingleNote(){

    return(

        <>

        <Header/>

        <section className="single-note">

            <Link
                to="/notes"
                className="back-btn"
            >
                ← Back
            </Link>

            <h1>React Crash Course</h1>

            <p className="date">
                15 July 2026
            </p>

            <div className="note-body">

                <p>

                    Today I learnt about React Components.

                </p>

                <p>

                    Props help us pass data between components.

                </p>

                <img
                    src="https://placehold.co/700x350"
                    alt=""
                />

                <p>

                    useState manages local state.

                </p>

            </div>

        </section>

        </>

    )

}