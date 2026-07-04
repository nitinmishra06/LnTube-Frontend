import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./Style/Notes.css";

const notes = [

    {
        id:1,
        title:"React Crash Course",
        preview:"Learnt about Hooks, Components and Props.",
        date:"15 July 2026"
    },

    {
        id:2,
        title:"Operating Systems",
        preview:"Scheduling Algorithms and Deadlocks.",
        date:"12 July 2026"
    },

    {
        id:3,
        title:"DBMS",
        preview:"Normalization and SQL Queries.",
        date:"10 July 2026"
    }

];

export function Notes(){

    return(

        <>

        <Header/>

        <section className="notes-page">

            <h1>My Notes</h1>

            <div className="notes-list">

                {

                    notes.map(note=>(

                        <Link
                            to={`/notes/${note.id}`}
                            className="note-card"
                            key={note.id}
                        >

                            <div>

                                <h2>{note.title}</h2>

                                <p>{note.preview}</p>

                            </div>

                            <span>{note.date}</span>

                        </Link>

                    ))

                }

            </div>

        </section>

        </>

    )

}