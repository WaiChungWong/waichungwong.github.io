import React from "react";
import Classnames from "classnames";

import "./style.css";

const SHAPE_COUNT = 5;

const { random, PI } = Math;
const shapes = ["■", "●", "▲"];
const randomShapes = [];

for (var i = 0; i < SHAPE_COUNT; i++) {
  randomShapes.push({
    top: `${random() * 100}%`,
    left: `${random() * 100}%`,
    shape: shapes[i % shapes.length],
    transform: `translate(-50%, -50%) scale(${0.5 + random()}) rotate(${PI *
      random()}rad)`,
    color: `hsl(${(i * 360) / SHAPE_COUNT}, 100%, 80%)`,
    opacity: 0.1 + 0.2 * (1 - random()),
    animationDuration: `${30 + 10 * random()}s`,
    animationDelay: `${5 * random()}s`
  });
}

const RandomShape = ({
  top,
  left,
  shape,
  transform,
  color,
  opacity,
  animationDuration,
  animationDelay
}) => (
  <div className="background-shape-wrapper" style={{ top, left, transform }}>
    <div
      className="background-shape"
      style={{ color, opacity, animationDuration, animationDelay }}
    >
      {shape}
    </div>
  </div>
);

export default ({ className }) => (
  <div className={Classnames(className, "background")}>
    {randomShapes.map((s, i) => (
      <RandomShape key={`s_${i}`} {...s} />
    ))}
  </div>
);
