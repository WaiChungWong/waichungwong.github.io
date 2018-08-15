import React, { Component } from "react";
import ClassNames from "classnames";

import { loadInspirations, loadModules } from "./utils";
import Intro from "./views/sections/intro";
import Inspirations from "./views/sections/inspirations";
import Modules from "./views/sections/modules";
import RandomShape from "./views/components/randomshape";
import Logo from "./views/components/logo";
import InspirationRepo from "./views/components/inspirationrepo";
import ModuleRepo from "./views/components/modulerepo";
import Contact from "./views/contact";

import "./app.css";

const { floor, max, random } = Math;
const { body, documentElement: html } = document;
const shapes = ["■", "□", "▲", "△", "●", "◯", "×"];
const shapeCount = 30;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { randomShapes: [], showContact: false };
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

  async componentDidMount() {
    let inspirations = await loadInspirations();
    let modules = await loadModules();

    this.setState({ inspirations, modules }, () => {
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
    });
  }

  render() {
    const { inspirations, modules, randomShapes, showContact } = this.state;

    return (
      <div id="app">
        <Logo
          id="app-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={ClassNames({ hide: showContact })}
        />
        <div
          id="contact-toggle"
          onClick={() => this.setState({ showContact: !showContact })}
          className={ClassNames({ opened: showContact })}
        >
          <span className="open">contact me</span>
          <span className="close">close</span>
        </div>
        <Intro className={ClassNames({ hide: showContact })} />
        {inspirations && (
          <Inspirations className={ClassNames({ hide: showContact })}>
            {inspirations.map(({ id, ...props }) => (
              <InspirationRepo key={id} {...props} />
            ))}
          </Inspirations>
        )}
        {modules && (
          <Modules className={ClassNames({ hide: showContact })}>
            {modules.map(({ id, ...props }) => (
              <ModuleRepo key={id} {...props} />
            ))}
          </Modules>
        )}
        <Contact className={ClassNames({ show: showContact })} />
        {randomShapes.map((shape, i) => (
          <RandomShape key={`shape-${i}`} {...shape} />
        ))}
      </div>
    );
  }
}

export default App;
