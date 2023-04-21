import React from "react";
import { cardsData } from "./ExperienceInfo.js";
import Astr from "./Astr";

const Card = ({ img, side, subTitle, title, bullets }) => (
  <div className="experience-card">
    <div className="experience-circle"></div>
    <img src={img} className="experience-icon" alt="icon" />
    <div className="experience-content">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-main">
        <Astr />

        <h1 className="h1h1">Professional Experience</h1>

        <div className="experience-timeline">
          <div className="experience-container">
            {cardsData.map((card) => (
              <Card
                id={card.id}
                img={card.img}
                side={card.side}
                subTitle={card.subTitle}
                title={card.title}
                bullets={card.bullets}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
