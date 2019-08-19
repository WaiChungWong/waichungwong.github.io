import React from "react";

import "./style.css";

const CLIP_PATH = `M210 30 L310 30 L310 260 q 0 100 -100 110z M190 30 L90 30 L90 130z M40 320 m 50 0 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0z`;

export default () => (
  <svg
    className="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="90 30 220 340"
  >
    <path d={CLIP_PATH} />
  </svg>
);
