import "./App.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";

import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const trackCursor = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="mouse-display" onMouseMove={trackCursor}>
      <div
        className="cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
