import React from "react";
import Navbar from "./Navbar";
import Solar from "./Solar";

const Home = () => {
  return (
    <div className="home">
      <Solar />
      <Navbar />
      <div className="home-main">
        <p className="home-greet">Hello! I am</p>
        <p className="home-name">SAMYAR FARJAM</p>
        <p className="home-role">Software Engineer</p>
      </div>
      <img className="home-rocket" src="rocket.svg" alt="|" />
    </div>
  );
};

export default Home;
