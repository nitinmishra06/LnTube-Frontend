import { Header } from "./Header";
import { NotesPanel } from "./NotesPanel";
import "./Style/Learn.css";

export function Learn() {

    return (
        <>
        <Header/>
        <section className="learn-page">

            <div className="video-section">

                <div className="video-player">

                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>

                </div>

                <div className="playlist">

                    <h2>Playlist</h2>

                    <div className="playlist-item active">
                        ▶ Introduction
                    </div>

                    <div className="playlist-item">
                        React Components
                    </div>

                    <div className="playlist-item">
                        Props & State
                    </div>

                    <div className="playlist-item">
                        useState Hook
                    </div>

                    <div className="playlist-item">
                        useEffect Hook
                    </div>

                </div>

            </div>
         <NotesPanel/>
            
        </section>
          
        </>

    )

}