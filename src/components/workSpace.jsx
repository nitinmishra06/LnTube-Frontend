import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { FaTrashAlt } from "react-icons/fa";
import api from "../api/axios";
import toast from "react-hot-toast";
import "./Style/Workspace.css";

export function Workspace() {
  const [url, setUrl] = useState("");
  const [workspaces, setWorkspaces] = useState([]);

  const navigate = useNavigate();

  async function getWorkspaces() {
    try {
      const res = await api.get("/workspace");
      setWorkspaces(res.data.workspaces);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load workspace");
    }
  }

  useEffect(() => {
    getWorkspaces();
  }, []);

  async function addWorkspace() {
    if (!url.trim()) {
      toast.error("Please paste a YouTube URL");
      return;
    }

    try {
      await api.post("/workspace", {
        url,
      });

      toast.success("Added to Workspace");

      setUrl("");

      getWorkspaces();
    } catch (err) {
      console.log(err);

      toast.error(err.response?.data?.message || "Something went wrong");
    }
  }

  async function deleteWorkspace(e, workspaceId) {
    e.stopPropagation();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workspace?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/workspace/${workspaceId}`);

      setWorkspaces((prev) =>
        prev.filter((workspace) => workspace._id !== workspaceId),
      );

      toast.success("Workspace deleted");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete workspace");
    }
  }

  return (
    <>
      <Header />

      <section className="workspace">
        <div className="workspace-header">
          <h1>My Workspace</h1>

          <p>
            Save YouTube videos and playlists to continue learning from where
            you left off.
          </p>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Paste YouTube Video / Playlist URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button onClick={addWorkspace}>+ Add</button>
        </div>

        <div className="board">
          {workspaces.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                width: "100%",
                marginTop: "50px",
                color: "#777",
              }}
            >
              <h2>No Workspaces Yet</h2>
              <p>Add a YouTube video or playlist to get started.</p>
            </div>
          ) : (
            <div className="playlist-grid">
              {workspaces.map((workspace) => (
                <div
                  className="playlist-card"
                  key={workspace._id}
                  onClick={() => navigate(`/learn/${workspace._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <button
                    className="delete-btn"
                    onClick={(e) => deleteWorkspace(e, workspace._id)}
                    title="Delete Workspace"
                  >
                    <FaTrashAlt />
                  </button>

                  <div className="pin"></div>

                  <img src={workspace.thumbnail} alt={workspace.title} />

                  <h3>{workspace.title}</h3>

                  <p>
                    {workspace.type === "video"
                      ? "🎥 Video"
                      : `🎥 ${workspace.videoCount} Videos`}
                  </p>

                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${workspace.progress}%`,
                      }}
                    ></div>
                  </div>

                  <span>{workspace.progress}% Completed</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
