import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Logo from "./views/components/logo";

import Home from "./views/pages/home";
import NotFound from "./views/pages/notfound";

import "./app.css";

const history = createHistory();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 1500);
  }

  render() {
    const { mounted } = this.state;

    return (
      <Router history={history}>
        <div id="app">
          <Logo id="mounted-logo" />
          {mounted && (
            <div id="content-wrapper">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route component={NotFound} />
              </Switch>
            </div>
          )}
        </div>
      </Router>
    );
  }
}
