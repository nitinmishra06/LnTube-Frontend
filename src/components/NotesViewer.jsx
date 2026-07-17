import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import api from "../api/axios";
import "./Style/NotesViewer.css";

export function NotesViewer() {
  const { workspaceId } = useParams();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/${workspaceId}`);

        setTitle(response.data.title || "Untitled Note");
        setNote(response.data.content || "");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [workspaceId]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="notes-viewer">
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="notes-viewer">
        <div className="notes-viewer-card">
          <h1>{title}</h1>

          <textarea
            className="notes-viewer-textarea"
            value={note}
            readOnly
          />
        </div>
      </div>
    </>
  );
}