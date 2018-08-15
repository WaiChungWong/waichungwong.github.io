import React from "react";
import PropTypes from "prop-types";

import "../style.css";
import "./style.css";

const Modules = ({ children, ...props }) => (
  <section id="modules" {...props}>
    <div className="headline">
      <div className="title">NPM Modules</div>
      <div className="subtitle">
        I like to build things, and I like making tools for that matter, too. So
        I built some npm modules for myself to use, and hopefully, they become
        handy for other people as well.
      </div>
    </div>
    <div className="list">{children}</div>
  </section>
);

Modules.propTypes = {
  children: PropTypes.node
};

export default Modules;
