import React, { Component } from "react";
import ClassNames from "classnames";
import Mouse from "jw-mouse";
import Keyboard, { Keys } from "jw-keyboard";

import HeroSprite from "../../../resources/hero-sprite.png";

import "./style.css";

const { random, floor, abs, min, max } = Math;

const heroWidth = 75;
const heroHeight = 90;
const runSpeed = 15;
const fullFall = 1;

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
      landed: false,
      running: false,
      faceleft: false,
      fallDuration: fullFall
    };

    this._transitionEndHandler = this._transitionEndHandler.bind(this);
    this._updatePostion = this._updatePostion.bind(this);
    this._pollKeyboard = this._pollKeyboard.bind(this);
    this._downHandler = this._downHandler.bind(this);
    this._dragHandler = this._dragHandler.bind(this);
    this._keyDownHandler = this._keyDownHandler.bind(this);
    this._keyUpHandler = this._keyUpHandler.bind(this);
  }

  _updatePostion() {
    const { offsetTop: top, offsetLeft: left } = this.hero;
    const { innerHeight } = window;
    const fullHeight = innerHeight - heroHeight;
    const fallDuration = abs(((fullHeight - top) / fullHeight) * fullFall);

    this.setState({
      dragging: false,
      top: fullHeight,
      left,
      fallDuration,
      landed: top >= fullHeight
    });
  }

  _pollKeyboard() {
    const { keyboard } = this.wrapper;
    const { landed, left: oldLeft } = this.state;

    const leftPressed = keyboard.hasKeyPressed(Keys.LEFT);
    const rightPressed = keyboard.hasKeyPressed(Keys.RIGHT);

    if (landed) {
      let faceleft = leftPressed;
      let left =
        oldLeft + (leftPressed ? -runSpeed : rightPressed ? runSpeed : 0);

      this.setState({ running: true, faceleft, left });
    } else {
      this.setState({ running: false });
    }
  }

  _transitionEndHandler() {
    const { top: oldTop, left: oldLeft } = this.state;
    const { innerWidth, innerHeight } = window;
    const fullHeight = innerHeight - heroHeight;

    if (oldTop === fullHeight) {
      this.setState({
        landed: true,
        fallDuration: null
      });

      if (oldLeft < 0 || oldLeft > innerWidth - heroWidth) {
        let running = oldLeft < 0 || oldLeft > innerWidth - heroWidth;
        let faceleft = oldLeft > innerWidth - heroWidth;
        let left = min(innerWidth - heroWidth, max(0, oldLeft));

        this.setState({ running, faceleft, left });
      } else {
        this.setState({ running: false });
      }
    }
  }

  _downHandler(event) {
    const { hero } = this;
    if (event.target === hero) {
      const { x: left, y: top } = event.mouse.position;
      const { offsetTop, offsetLeft } = hero;

      this.dragTop = top - offsetTop;
      this.dragLeft = left - offsetLeft;
      this.setState({ dragging: true });
    }
  }

  _dragHandler(event) {
    if (this.state.dragging) {
      const { x, y } = event.mouse.position;
      const { dragTop, dragLeft } = this;
      const { innerHeight } = window;
      const fullHeight = innerHeight - heroHeight;
      const top = y - dragTop;
      const left = x - dragLeft;

      this.setState({ landed: top >= fullHeight, top, left });

      this._transitionEndHandler();
    }
  }

  _keyDownHandler() {
    const { keyboard } = this.wrapper;
    const leftPressed = keyboard.hasKeyPressed(Keys.LEFT);
    const rightPressed = keyboard.hasKeyPressed(Keys.RIGHT);

    if ((leftPressed || rightPressed) && !this.keyboardInterval) {
      this.keyboardInterval = setInterval(this._pollKeyboard, 80);
    }
  }

  _keyUpHandler() {
    const { keyboard } = this.wrapper;
    const leftPressed = keyboard.hasKeyPressed(Keys.LEFT);
    const rightPressed = keyboard.hasKeyPressed(Keys.RIGHT);
    const { offsetLeft } = this.hero;

    if (!leftPressed && !rightPressed && this.keyboardInterval) {
      clearInterval(this.keyboardInterval);
      this.keyboardInterval = null;
      this.setState({ running: false, left: offsetLeft });
    }
  }

  componentDidMount() {
    const { wrapper, hero } = this;
    const { innerWidth, innerHeight } = window;
    const fullWidth = innerWidth - heroWidth;
    const fullHeight = innerHeight - heroHeight;

    this.setState({
      top: -heroHeight,
      left: floor(random() * fullWidth)
    });

    setTimeout(() => this.setState({ top: fullHeight }));

    wrapper.mouse = new Mouse(wrapper);
    wrapper.mouse.onDown(this._downHandler);
    wrapper.mouse.onUp(this._updatePostion);
    wrapper.mouse.onDrag(this._dragHandler);
    wrapper.keyboard = new Keyboard(document);
    wrapper.keyboard.onKeyDown(this._keyDownHandler);
    wrapper.keyboard.onKeyUp(this._keyUpHandler);
    wrapper.keyboard.setPreventHoldDownEvent(true);

    hero.addEventListener("transitionend", this._transitionEndHandler);
  }

  componentWillUnmount() {
    this.wrapper.mouse.detach();
    this.wrapper.keyboard.detach();

    this.hero.removeEventListener("transitionend", this._transitionEndHandler);
  }

  render() {
    const {
      dragging,
      landed,
      running,
      faceleft,
      top,
      left,
      fallDuration
    } = this.state;

    return (
      <div id="hero-wrapper" ref={w => (this.wrapper = w)}>
        <div
          id="hero"
          ref={h => (this.hero = h)}
          {...this.props}
          className={ClassNames({ dragging, landed, running, faceleft })}
          style={{
            backgroundImage: `url(${HeroSprite})`,
            top: `${top}px`,
            left: `${left}px`,
            transitionDuration:
              fallDuration !== null && `${fallDuration}s, 0.5s`
          }}
        />
      </div>
    );
  }
}

export default Hero;
