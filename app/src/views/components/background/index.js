import React, { Component } from "react";
import RandomShape from "../randomshape";

import "./style.css";

const { floor, max, random } = Math;
const { body, documentElement: html } = document;
const shapes = ["■", "□", "▲", "△", "●", "◯", "×"];
const shapeCount = 30;

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = { randomShapes: [] };
  }

  addShape(top, left) {
    const { randomShapes } = this.state;
    let shape = shapes[floor(random() * shapes.length)];
    let perspective = random();
    let rotation = random();
    let hue = random();

    randomShapes.push({
      top,
      left,
      shape,
      perspective,
      rotation,
      hue
    });

    if (randomShapes.length > shapeCount) {
      randomShapes.shift();
    }

    this.setState({ randomShapes });
  }

  componentDidMount() {
    for (let i = 0; i < shapeCount; i++) {
      this.addShape(
        random() *
          max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
          ),
        random() *
          max(
            body.scrollWidth,
            body.offsetWidth,
            html.clientWidth,
            html.scrollWidth,
            html.offsetWidth
          )
      );
    }
  }

  render() {
    const { randomShapes } = this.state;

    return (
      <div id="background">
        {randomShapes.map((shape, i) => (
          <RandomShape key={`shape-${i}`} {...shape} />
        ))}
      </div>
    );
  }
}

export default Background;
