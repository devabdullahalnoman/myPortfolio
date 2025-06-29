import "./App.css";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar></Navbar>
      </div>
      <header>
        <Hero></Hero>
      </header>
    </>
  );
}

export default App;
