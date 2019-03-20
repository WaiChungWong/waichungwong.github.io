import React, { Component } from "react";
import ClassNames from "classnames";

import { loadInspirations, loadModules } from "./utils";
import Background from "./views/components/background";
import Intro from "./views/sections/intro";
import Inspirations from "./views/sections/inspirations";
import Modules from "./views/sections/modules";
import Logo from "./views/components/logo";
import InspirationRepo from "./views/components/inspirationrepo";
import ModuleRepo from "./views/components/modulerepo";
import Contact from "./views/contact";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showContact: false, night: false };
  }

  updateDayNight() {
    let now = new Date();
    let hour = now.getHours();
    let nextUpdate = new Date();
    nextUpdate.setMinutes(0);
    nextUpdate.setSeconds(0);

    this.setState({ night: hour < 5 || hour >= 17 });

    if (hour < 5) {
      nextUpdate.setHours(5);
    } else if (hour >= 5 && hour < 17) {
      nextUpdate.setHours(17);
    } else {
      nextUpdate.setDate(now.getDate() + 1);
      nextUpdate.setHours(5);
    }

    this.timer = setTimeout(
      () => this.updateDayNight(),
      nextUpdate.getTime() - now.getTime()
    );
  }

  async componentDidMount() {
    this.updateDayNight();

    let inspirations = await loadInspirations();
    let modules = await loadModules();

    this.setState({ inspirations, modules });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { inspirations, modules, showContact, night } = this.state;

    return (
      <div id="app" className={ClassNames({ night })}>
        <div id="app-header-wrapper">
          <div id="app-header">
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
          </div>
        </div>
        {inspirations && modules && <Background />}
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
      </div>
    );
  }
}

export default App;
