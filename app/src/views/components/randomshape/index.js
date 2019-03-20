import React from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";

import "./style.css";

const RandomShape = ({ top, left, shape, perspective, rotation, hue }) => (
  <div
    className="shape-wrapper"
    style={{
      top: `${top}px`,
      left: `${left}px`,
      transform: `translate(-50%, -50%) scale(${5 +
        35 * perspective}) rotate(${Math.PI * rotation}rad) `
    }}
  >
    <div
      className={ClassNames("shape", {
        float1: rotation > 0.5,
        float2: rotation <= 0.5
      })}
      style={{
        color: `hsl(${360 * hue}, 100%, 80%)`,
        opacity: `${0.3 + 0.2 * (1 - perspective)}`,
        animationDuration: `${18 + 4 * rotation}s`,
        animationDelay: `${5 * rotation}s`
      }}
    >
      {shape}
    </div>
  </div>
);

RandomShape.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  shape: PropTypes.string,
  perspective: PropTypes.number,
  rotation: PropTypes.number,
  hue: PropTypes.number
};

export default RandomShape;
