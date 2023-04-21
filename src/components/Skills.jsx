import React from "react";
import { cardsData } from "./SkillsInfo.js";

const Card = ({ imgSrc, title, bullets }) => (
  <div className="skills-card">
    <img src={imgSrc} alt="img" />
    <h3>{title}</h3>
    <ul>
      {bullets.map((bullet, index) => (
        <li key={index}>{bullet}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-main">
        <h1 className="h3h3">Skills</h1>
        <div className="skills-container">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              bullets={card.bullets}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
