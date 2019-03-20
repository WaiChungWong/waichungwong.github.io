import React, { Component } from "react";

import "../style.css";
import "./style.css";

const { random, floor } = Math;
const periods = {
  morning: ["Good morning!", "Howdy!", "Hello!"],
  afternoon: ["Good afternoon!", "Good day!", "Hi there!"],
  evening: ["Good evening!", "Hello!", "Hi there!"]
};

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = { greetWords: "Hello!" };
  }

  updateTimePeriod() {
    let now = new Date();
    let hour = now.getHours();
    let nextUpdate = new Date();
    nextUpdate.setMinutes(0);
    nextUpdate.setSeconds(0);

    let greetWordsList = [];

    if (hour < 5) {
      greetWordsList = periods.evening;
      nextUpdate.setHours(5);
    } else if (hour >= 5 && hour < 12) {
      greetWordsList = periods.morning;
      nextUpdate.setHours(12);
    } else if (hour >= 12 && hour < 17) {
      greetWordsList = periods.afternoon;
      nextUpdate.setHours(17);
    } else {
      greetWordsList = periods.evening;
      nextUpdate.setDate(now.getDate() + 1);
      nextUpdate.setHours(5);
    }

    this.setState({
      greetWords: greetWordsList[floor(random() * greetWordsList.length)]
    });

    this.timer = setTimeout(
      () => this.updateTimePeriod(),
      nextUpdate.getTime() - now.getTime()
    );
  }

  componentDidMount() {
    this.updateTimePeriod();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { greetWords } = this.state;

    return (
      <section id="intro" {...this.props}>
        <div className="headline">
          <div className="title">{greetWords}</div>
          <div className="subtitle">
            I’m a web developer. Passionate about front-end, experienced with
            the back-end. I’m into creating intuitive and attractive digital
            experiences. And I love CSS and animations!
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
