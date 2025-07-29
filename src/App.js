import './App.css';
import Navbar from './Components/NavBar.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
    <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
  </>
  )
}

export default App;
