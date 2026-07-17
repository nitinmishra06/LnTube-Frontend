import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import "./Style/notesPanel.css";

export function NotesPanel() {
  const { workspaceId } = useParams();

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState("Saved");

  const initialLoad = useRef(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get(`/notes/${workspaceId}`);

        setTitle(response.data.title || "");
        setNotes(response.data.content || "");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [workspaceId]);

  useEffect(() => {
    if (loading) return;

    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setSaveStatus("Saving...");

        await api.put(`/notes/${workspaceId}`, {
          title,
          content: notes,
        });

        setSaveStatus("✓ Saved");
      } catch (err) {
        console.error(err);
        setSaveStatus("Error saving");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [title, notes, workspaceId, loading]);

  if (loading) {
    return (
      <div className="notes-panel">
        <h2>Loading Notes...</h2>
      </div>
    );
  }

  return (
    <div className="notes-panel">
      <input
        type="text"
        className="note-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Untitled Note"
      />

      <p className="save-status">{saveStatus}</p>

      <textarea
        className="notes-textarea"
        placeholder="Write your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}