import React from "react";

import "./style.css";

const LOGO_PATH = `
M80 220 L100 220 L140 180 L180 220 L220 180 L260 220 L300 180 L320 180
`;

const Logo = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="70 200 280 1">
    <g className="logo-group">
      <path className="logo-path" d={LOGO_PATH} />
      <circle className="logo-dot" cx="100" cy="182" r="8" />
      <circle className="logo-dot" cx="300" cy="218" r="8" />
    </g>
  </svg>
);

export default Logo;
