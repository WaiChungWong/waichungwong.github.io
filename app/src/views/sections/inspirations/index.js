import React from "react";
import PropTypes from "prop-types";

import "../style.css";
import "./style.css";

const Inspirations = ({ children, ...props }) => (
  <section id="inspirations" {...props}>
    <div className="headline">
      <div className="title">Inspirations</div>
      <div className="subtitle">
        Here are my random inspirations outside work. They may seem meanlingless
        and unpractical, but hey, they’re just for fun!
      </div>
    </div>
    <div className="list">{children}</div>
  </section>
);

Inspirations.propTypes = {
  children: PropTypes.node
};

export default Inspirations;
