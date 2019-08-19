import React, { useState, useEffect } from "react";

import { loadNPMModules } from "../../../utils";

import "./style.css";

const Module = ({ name, description, source, ...props }) => {
  return (
    <div className="npm-modules-item">
      <span className="npm-modules-item-title">{name}</span>
      <a
        className="npm-modules-item-install"
        href={`https://nodei.co/npm/${name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`https://nodei.co/npm/${name}.png`} alt={name} />
      </a>
      <div className="npm-modules-item-desc">{description}</div>
      <a
        className="npm-modules-item-source"
        href={source}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
      <a
        className="npm-modules-item-demo"
        href={`https://waichungwong.github.io/${name}/build`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo
      </a>
    </div>
  );
};

export default () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModuleList = async () => {
      setModules(await loadNPMModules());
      setLoading(false);
    };

    loadModuleList();
  }, []);

  return (
    <section>
      <div className="npm-modules-title">NPM Modules</div>
      {loading ? (
        <div className="npm-modules-loader" />
      ) : modules !== null ? (
        <div className="npm-modules-list">
          {modules.map((p, i) => (
            <Module key={`p_${i}`} {...p} />
          ))}
        </div>
      ) : (
        <div className="npm-modules-error">
          Oops...There seems to a problem loading those modules. Sorry about
          that.
        </div>
      )}
    </section>
  );
};
