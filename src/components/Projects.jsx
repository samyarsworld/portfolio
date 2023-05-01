import React from "react";
import { cardsData } from "./ProjectsInfo";

const Card = ({ imgSrc, title, subTitle, live, github, moreInfo, bullets, id }) => (
  <div className="projects-card">
    <div class="projects-user-card">
      <img src={imgSrc} alt="moon" />
    </div>
    <div class="projects-content">
      <h2>{title}</h2>
      <p className="projects-subtitle">
        <i className="fa fa-grav" style={{marginRight:'4px'}}></i>
        {subTitle}
      </p>
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <p class="projects-more">
        <a href={live} target="_blank" rel="noreferrer">
          <button>Live</button>
        </a>
        {id != 4 && (<a href={github} target="_blank" rel="noreferrer">
          <button style={{ marginLeft: "15px" }}>Github</button>
        </a>) }
        
        <span style={{ float: "right" }}>{moreInfo}</span>
      </p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-main">
        <h1 className="h2h2">Research and Projects</h1>

        {cardsData.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            subTitle={card.subTitle}
            live={card.live}
            github={card.github}
            moreInfo={card.moreInfo}
            bullets={card.bullets}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
