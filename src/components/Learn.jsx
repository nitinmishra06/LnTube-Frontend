import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { NotesPanel } from "./NotesPanel";
import api from "../api/axios.js";
import "./Style/Learn.css";

export function Learn() {
  const { workspaceId } = useParams();

  const [workspace, setWorkspace] = useState(null);
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkspace = async () => {
      try {
        const response = await api.get(`/workspace/${workspaceId}`);

        const { workspace, playlistVideos } = response.data;

        setWorkspace(workspace);
        setPlaylistVideos(playlistVideos);

        if (workspace.type === "playlist" && playlistVideos.length > 0) {
          setCurrentVideo(playlistVideos[0].videoId);
        } else {
          setCurrentVideo(workspace.youtubeId);
        }
      } catch (error) {
        console.error("Error fetching workspace:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspace();
  }, [workspaceId]);

  if (loading) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Loading...
        </h2>
      </>
    );
  }

  if (!workspace) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", marginTop: "40px", color: "red" }}>
          Workspace not found.
        </h2>
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="learn-page">
        <div className="video-section">
          <div className="video-player">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${currentVideo}`}
              title={workspace.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="playlist">
            <h2>{workspace.title}</h2>

            {workspace.type === "playlist" ? (
              playlistVideos.map((video, index) => (
                <div
                  key={video.videoId}
                  className={`playlist-item ${
                    currentVideo === video.videoId ? "active" : ""
                  }`}
                  onClick={() => setCurrentVideo(video.videoId)}
                  style={{ cursor: "pointer" }}
                >
                  {index + 1}. {video.title}
                </div>
              ))
            ) : (
              <div className="playlist-empty">
                <p>This is a single video.</p>
              </div>
            )}
          </div>
        </div>

        <NotesPanel />
      </section>
    </>
  );
}