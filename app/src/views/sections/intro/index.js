import React from "react";

import "../style.css";
import "./style.css";

export default ({ ...props }) => (
  <section id="intro" {...props}>
    <div className="headline">
      <div className="title">John Wong</div>
      <div className="subtitle">
        I’m a full-stack developer. Passionate about front-end development. I’m
        into creating intuitive and attractive digital experiences. And I love
        CSS and animations!
      </div>
    </div>
  </section>
);
