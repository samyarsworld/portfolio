import React from "react";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const About = () => {
  const scrollToSection = (name) => {
    const section = document.querySelector(`.${name}`);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="about-main">
      <h1 className="about-main-title">About Me</h1>
      <h2 className="about-main-subtitle">
        <a
          href="https://www.linkedin.com/in/samyarfarjam/"
          target="_blank"
          rel="noreferrer">
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://github.com/samyarsworld"
          target="_blank"
          rel="noreferrer">
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="mailto:samyarfarjam@outlook.com"
          target="_blank"
          rel="noreferrer">
          <i class="fas fa-envelope fa-lg"></i>
        </a>
      </h2>
      <p className="about-main-desc">
        Samyar is a backend/system developer who is driven by a true
        passion for implementing efficient algorithms to solve complex
        global and in the near future, interstellar challenges. Having
        obtained his Master's degree, he has gained extensive experience
        working on diverse data science, API setup, and programming projects. He
        is a lifelong learner, constantly striving to broaden his knowledge
        and remain abreast of cutting-edge technologies.
      </p>
      <button
        className="about-main-btn"
        onClick={() => scrollToSection("contact")}>
        Learn more
      </button>
    </div>
  );
};

export default About;
