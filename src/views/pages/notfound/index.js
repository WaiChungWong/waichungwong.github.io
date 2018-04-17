import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./style.css";

const NotFound = () => (
  <div id="not-found">
    <h1>
      Hey!<br />Where do you think you’re surfing?
    </h1>
    <h2>
      Get back to homepage{" "}
      <Link id="not-found-link" to="/">
        here
      </Link>
    </h2>
  </div>
);

export default NotFound;
