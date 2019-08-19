import React from "react";
import Classnames from "classnames";

import "./style.css";

export default ({ className, onChange = () => {}, checked = false }) => (
  <label className={Classnames(className, "switch")}>
    <input type="checkbox" onChange={onChange} checked={checked} />
    <span className="slider"></span>
  </label>
);
