import React from "react";

import "./style.css";

const LOGO_PATH = `
M80 220 L100 220 L140 180 L180 220 L220 180 L260 220 L300 180 L320 180
`;

const Logo = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 100 400 200">
    <g className="logo-group">
      <path className="logo-path" d={LOGO_PATH} />
      <circle className="logo-dot" cx="110" cy="182" r="4" />
      <circle className="logo-dot" cx="290" cy="218" r="4" />
    </g>
  </svg>
);

export default Logo;
