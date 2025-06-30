import AboutMe from "./aboutMe/AboutMe";
import "./App.css";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function App() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </>
  );
}

export default App;
