import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import api from "../api/axios";
import "./Style/Notes.css";

export function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get("/workspace");
        const workspaces = response.data.workspaces || [];

        const notesWithContent = await Promise.all(
          workspaces.map(async (workspace) => {
            try {
              const noteResponse = await api.get(`/notes/${workspace._id}`);

              const note = noteResponse.data;

              if (note.content.trim() !== "") {
                return {
                  workspaceId: workspace._id,
                  title: note.title,
                  preview: note.content.substring(0, 80),
                  updatedAt: note.updatedAt,
                };
              }

              return null;
            } catch (err) {
              return null;
            }
          })
        );

        setNotes(notesWithContent.filter(Boolean));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      <Header />

      <section className="notes-page">
        <h1>My Notes</h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : notes.length === 0 ? (
          <h2>You haven't created any notes yet.</h2>
        ) : (
          <div className="notes-list">
            {notes.map((note) => (
              <Link
                key={note.workspaceId}
                to={`/notes/${note.workspaceId}`}
                className="note-card"
              >
                <div>
                  <h2>{note.title}</h2>

                  <p>{note.preview}...</p>
                </div>

                <span>
                  {new Date(note.updatedAt).toLocaleDateString()}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}