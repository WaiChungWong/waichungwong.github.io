import React from "react";
import Classnames from "classnames";

import "./style.css";

const SKILLSET = {
  "Front End": [
    { name: "HTML5", logo: "html5", rating: 5 },
    { name: "CSS3", logo: "css3", rating: 5 },
    { name: "JavaScript", logo: "js", rating: 4 },
    { name: "PHP", logo: "php", rating: 3 },
    { name: "React", logo: "react", rating: 4 },
    { name: "Redux", logo: "redux", rating: 4 },
    { name: "JQuery", logo: "jquery", rating: 4 },
    { name: "SASS", logo: "sass", rating: 4 }
  ],
  "Back End": [
    { name: "Node", logo: "node", rating: 4 },
    { name: "Express", logo: "express", rating: 4 },
    { name: "GraphQL", logo: "graphql", rating: 2 },
    { name: "MySQL", logo: "mysql", rating: 3 },
    { name: "PostgreSQL", logo: "postgres", rating: 2 }
  ],
  Testing: [
    { name: "Mocha", logo: "mocha", rating: 3 },
    { name: "Chai", logo: "chai", rating: 3 }
  ]
};

const SkillBadge = ({ name, logo, rating = 0 }) => (
  <div className="skill-badge" tabIndex="0">
    <div className="skill-badge-inner">
      <div className="skill-badge-front">
        <div className={Classnames("skills-logo", logo)} />
      </div>
      <div className="skill-badge-back">
        {[1, 2, 3, 4, 5].map((r, i) => (
          <span
            key={`s_${name}_${i}`}
            className={Classnames("skill-star", { filled: r <= rating })}
          />
        ))}
        <span className="skill-name">{name}</span>
      </div>
    </div>
  </div>
);

export default () => (
  <section>
    <div className="skills-title">Skills</div>
    <div className="skills-list">
      {Object.keys(SKILLSET).map((c, cI) => (
        <div key={`c_${cI}`}>
          <div className="skills-list-title">{c}</div>
          <div className="skills-list-content">
            {SKILLSET[c].map((s, sI) => (
              <SkillBadge key={`s_${cI}_${sI}`} {...s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
