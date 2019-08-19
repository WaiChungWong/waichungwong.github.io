import React, { useState, useEffect, useRef } from "react";
import Classnames from "classnames";

import { loadPassionProjects } from "../../../utils";

import "./style.css";

const Project = ({ name, source, ...props }) => {
  const [active, setActive] = useState(false);
  const demoRef = useRef(null);
  const activate = () => setActive(true);
  const deactivate = () => setActive(false);

  useEffect(() => {
    const { current: video } = demoRef;
    const updatePlayStatus = async () => {
      try {
        if (active) {
          await video.play();
        } else {
          await video.pause();
        }
      } catch (error) {}
    };

    updatePlayStatus();
  }, [active]);

  return (
    <div className={Classnames("passion-projects-item", { active })}>
      <video ref={demoRef} className="passion-projects-item-video" loop>
        <source
          src={`https://waichungwong.github.io/${name}/demo.mp4`}
          type="video/mp4"
        />
      </video>
      <div
        className="passion-projects-item-overlay"
        onMouseOver={activate}
        onMouseOut={deactivate}
        onMouseDown={activate}
      >
        <span className="passion-projects-item-title">{name}</span>
        <a
          className="passion-projects-item-source"
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        <a
          className="passion-projects-item-demo"
          href={`https://waichungwong.github.io/${name}/build`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjectList = async () => {
      setProjects(await loadPassionProjects());
      setLoading(false);
    };

    loadProjectList();
  }, []);

  return (
    <section>
      <div className="passion-projects-title">Passion Projects</div>
      {loading ? (
        <div className="passion-projects-loader" />
      ) : projects !== null ? (
        <div className="passion-projects-list">
          {projects.map((p, i) => (
            <Project key={`p_${i}`} {...p} />
          ))}
        </div>
      ) : (
        <div className="passion-projects-error">
          Oops...There seems to a problem loading those projects. Sorry about
          that.
        </div>
      )}
    </section>
  );
};
