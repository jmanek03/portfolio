import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Projects/>
    <Skills/>
    <Education/>
    </>
  );
}

export default App;
