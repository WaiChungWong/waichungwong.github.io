import React from "react";
import Classnames from "classnames";

import "./style.css";

export default ({ className }) => (
  <div className={Classnames(className, "scroll-icon")}></div>
);
