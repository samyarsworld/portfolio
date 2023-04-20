import React from "react";
import "./css/App.css";
import "./css/Home.css";
import "./css/About.css";
import "./css/Experience.css";
import "./css/Projects.css";
import "./css/Skills.css";
import "./css/Contact.css";
import "./css/Solar.scss";
import "./css/Ast.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
