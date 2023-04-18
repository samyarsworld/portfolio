import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const About = () => {
  return (
    <div className="about">
      <div className="about-main">
        <div className="about-main-left">
          <h1 className="about-main-left-title">this is the title</h1>
          <h2 className="about-main-left-subtitle">-- this is the subtitle</h2>
          <p className="about-main-left-desc">Hello from the other side</p>
          <button className="about-main-left-btn">Learn more</button>
        </div>
        <div className="about-main-right">
          <Canvas>
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
        </div>
      </div>
    </div>
  );
};

export default About;
