import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const About = () => {
  const scrollToSection = (name) => {
    const section = document.querySelector(`.${name}`);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="about">
      <div className="about-main">
        <div className="about-main-left">
          <h1 className="about-main-left-title">About Me</h1>
          <h2 className="about-main-left-subtitle">
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
          <p className="about-main-left-desc">
            Samyar is a professional back-end developer who is driven by a true
            passion for implementing efficient algorithms to solve complex
            global and in the near future, interstellar challenges. Having
            obtained his Master's degree, he has gained extensive experience
            working on diverse frontend, backend, and programming projects. He
            is a lifelong learner, constantly striving to broaden his knowledge
            and remain abreast of cutting-edge technologies.
          </p>
          <button
            className="about-main-left-btn"
            onClick={() => scrollToSection("contact")}>
            Learn more
          </button>
        </div>
        {/* <div className="about-main-right">
          <Canvas className="canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img className="about-main-right-img" src="moon.png" alt="moon" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
