import React from "react";
import Classnames from "classnames";

import "./style.css";

const SKILLSET = {
  "Front End": [
    { name: "HTML5", logo: "html5" },
    { name: "CSS3", logo: "css3" },
    { name: "JavaScript", logo: "js" },
    { name: "PHP", logo: "php" },
    { name: "React", logo: "react" },
    { name: "Redux", logo: "redux" },
    { name: "JQuery", logo: "jquery" },
    { name: "SASS", logo: "sass" }
  ],
  "Back End": [
    { name: "Node", logo: "node" },
    { name: "Express", logo: "express" },
    { name: "GraphQL", logo: "graphql" },
    { name: "MySQL", logo: "mysql" },
    { name: "PostgreSQL", logo: "postgres" }
  ],
  Testing: [{ name: "Mocha", logo: "mocha" }, { name: "Chai", logo: "chai" }]
};

const SkillBadge = ({ name, logoClass }) => (
  <div className="skill-badge" tabIndex="0">
    <div className="skill-badge-inner">
      <div className="skill-badge-front">
        <div className={Classnames("skills-logo", logoClass)} />
      </div>
      <div className="skill-badge-back">
        <span>{name}</span>
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
            {SKILLSET[c].map(({ name, logo }, sI) => (
              <SkillBadge key={`s_${cI}_${sI}`} name={name} logoClass={logo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
