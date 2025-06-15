// src/App.jsx

import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navmenu';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './data/style.css';



function App() {
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
    </HashRouter>
  );
}

export default App;
