import './Style/notesPanel.css'

export function NotesPanel(){

    return(
        <div className="notes-panel">

    <h2>Notes</h2>

    <div className="notes-container">

        <div className="note-message">
            React uses components.
        </div>

        <div className="note-message">
            useState is used for state management.
        </div>

    </div>

    <div className="notes-input">

        <input
            type="text"
            placeholder="Write a note..."
        />

        <button className="icon-btn">

            {/* Add */}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">

                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>

            </svg>

        </button>

        <button className="icon-btn">

            {/* Camera */}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">

                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>

                <circle cx="12" cy="13" r="4"/>

            </svg>

        </button>

        <button className="icon-btn">

            {/* PDF */}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">

                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>

                <polyline points="14 2 14 8 20 8"/>

                <text
                    x="7"
                    y="17"
                    fontSize="5"
                    fill="currentColor">

                    PDF

                </text>

            </svg>

        </button>

    </div>

</div>
    );
}