import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navmenu';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

import NotFound from './pages/NotFound';
import './data/style.css';

function App() {
  // Easter egg 1 – klick på emoji
  function handleEasterEggClick() {
    alert("Rock on! 🎸");
    document.body.style.backgroundImage = "url('/Pictures/GameOver.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
  }

  // Easter egg 2 – tangentbordskod "1337"
  useEffect(() => {
    let inputBuffer = "";

    const handleKeyDown = (event) => {
      inputBuffer += event.key;
      if (inputBuffer.length > 4) {
        inputBuffer = inputBuffer.slice(-4);
      }

      if (inputBuffer.includes("1337")) {
        document.body.style.backgroundImage = "url('/Pictures/PeterGriffin.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        alert("Du vart just Peter Griffind ");
        inputBuffer = "";
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Easter egg emoji */}
      <div
        id="easteregg2"
        onClick={handleEasterEggClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontSize: "30px",
          cursor: "pointer",
          zIndex: 999,
        }}
      >
        🤘
      </div>
    </HashRouter>
  );
}

export default App;
