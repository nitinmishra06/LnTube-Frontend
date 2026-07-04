import { Route,Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Learn } from './components/Learn'
import { Notes } from './components/Notes'
import './App.css'

function App() {
           

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/learn" element={<Learn/>}/>
      <Route path="/notes" element={<Notes/>}/>
    </Routes>
    </>
  )
}

export default App
