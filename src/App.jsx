import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Learn } from "./components/Learn";
import { Notes } from "./components/Notes";
import { SingleNote } from "./components/SingleNote";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login";
import { NotesViewer } from "./components/NotesViewer";
import { Workspace } from "./components/workSpace";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/learn/:workspaceId" element={<Learn />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:workspaceId" element={<NotesViewer />} />
      <Route path="/notes/:id" element={<SingleNote />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
