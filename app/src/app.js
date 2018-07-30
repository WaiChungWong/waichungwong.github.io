import React, { Component } from "react";
import { loadInspirations, loadModules } from "./utils";

import Logo from "./views/components/logo";
import InspirationRepo from "./views/components/inspirationrepo";
import ModuleRepo from "./views/components/modulerepo";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    let inspirations = await loadInspirations();
    let modules = await loadModules();

    this.setState({ inspirations, modules });
  }

  render() {
    const { inspirations, modules } = this.state;

    return (
      <div id="app">
        <Logo id="app-logo" />
        <section>
          <div id="main-headline" className="headline">
            <div className="title">Hi, I’m John</div>
            <div className="subtitle">
              I’m a full-stack developer. Passionate about front-end
              development. I’m into creating intuitive and attractive digital
              experiences. And I love CSS and animations!
            </div>
          </div>
        </section>
        {inspirations && (
          <section>
            <div id="inspiration-headline" className="headline">
              <div id="inspiration-title" className="title">
                Inspirations
              </div>
              <div id="inspiration-subtitle" className="subtitle">
                Here are my random inspirations outside work. It may seem
                meanlingless and unpractical, but hey, they’re just for fun!
              </div>
            </div>
            <div id="inspiration-list" className="list">
              {inspirations.map(({ id, ...props }) => (
                <InspirationRepo key={id} {...props} />
              ))}
            </div>
          </section>
        )}
        {modules && (
          <section>
            <div id="module-headline" className="headline">
              <div id="module-title" className="title">
                NPM Modules
              </div>
              <div id="module-title" className="subtitle">
                I like to build things, and I like making tools for that matter,
                too. So here are my npm modules that I built for myself to use,
                and hopefully, they become handy for other people as well.
              </div>
            </div>
            <div id="module-list" className="list">
              {modules.map(({ id, ...props }) => (
                <ModuleRepo key={id} {...props} />
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default App;
