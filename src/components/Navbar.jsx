import React from "react";

const Navbar = () => {
  const scrollToSection = (name) => {
    const section = document.querySelector(`.${name}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="navbar-ribbon">
        <a href="/" className="navbar-logo">
          <img src="planet.svg" alt="Planet" />
          <small style={{marginLeft:"-15px"}}>Samyarsworld</small>
        </a>

        <ul className="navbar-list">
          <li className="navbar-item" onClick={() => scrollToSection("about-main")}>
            About
          </li>
          <li
            className="navbar-item"
            onClick={() => scrollToSection("experience-main")}>
            Experience
          </li>
          <li
            className="navbar-item"
            onClick={() => scrollToSection("projects-main")}>
            Projects
          </li>
          <li className="navbar-item" onClick={() => scrollToSection("skills-main")}>
            Skills
          </li>
        </ul>

        <button
          className="navbar-btn"
          onClick={() => scrollToSection("contact-main")}>
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
