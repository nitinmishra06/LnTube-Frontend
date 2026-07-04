import { Route,Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Learn } from './components/Learn'
import { Notes } from './components/Notes'
import { SingleNote } from './components/SingleNote'
import { Profile } from './components/Profile'
import { Login } from './components/Login'
import './App.css'

function App() {
           

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/learn" element={<Learn/>}/>
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/notes/:id" element={<SingleNote/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
