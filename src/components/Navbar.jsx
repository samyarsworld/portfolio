import React from "react";

const Navbar = () => {
  const scrollToSection = (name) => {
    const section = document.querySelector(`.${name}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="navbar-ribbon">
        <span className="navbar-logo">SAMYAR</span>

        <ul className="navbar-list">
          <li className="navbar-item" onClick={() => scrollToSection("about")}>
            Home
          </li>
          <li
            className="navbar-item"
            onClick={() => scrollToSection("experience")}>
            Experience
          </li>
          <li className="navbar-item" onClick={() => scrollToSection("skills")}>
            Skills
          </li>
          <li
            className="navbar-item"
            onClick={() => scrollToSection("projects")}>
            Projects
          </li>
        </ul>

        <button
          className="navbar-btn"
          onClick={() => scrollToSection("contact")}>
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
