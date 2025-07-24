import './App.css';
import Navbar from './Components/NavBar.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js'


function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/Projects":
      component = <Projects />
      break
    case "/About Me":
      component = <About />
      break
  }
  return (
    <>
  <Navbar />
  { component }
  </>
  )
}

export default App;
