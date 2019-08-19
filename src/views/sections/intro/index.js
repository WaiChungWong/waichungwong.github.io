import React from "react";

import Logo from "../../components/logo";
import Signature from "../../components/signature";

import "./style.css";

export default () => (
  <section className="intro">
    <Logo className="intro-logo" />
    <div className="intro-headline">
      <Signature />
      <div className="intro-title">Software Engineer</div>
      <div className="intro-subtitle">
        Passionate about front-end, experienced with the back-end. Into creating
        intuitive and attractive UI/UX. And loves CSS and animations!
      </div>
    </div>
  </section>
);
