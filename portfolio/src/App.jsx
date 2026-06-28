import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Connect from './components/Connect'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="connect">
          <Connect />
        </div>
      </div>
    </div>
  )
}

export default App
