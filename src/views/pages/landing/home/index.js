import React, { Component } from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import { NavLink as Link } from "react-router-dom";

import Logo from "../../../components/logo";
import Signature from "../../../components/signature";
import Gallery from "./gallery";

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHomeLink: false,
      signatureStyle: {}
    };

    this._scrollHandler = this._scrollHandler.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;

    window.addEventListener("scroll", this._scrollHandler);
    this._scrollHandler();

    setTimeout(() => this._jumpToHash(), 1000);
    this._unlistenHistory = history.listen(() => this._jumpToHash());
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._scrollHandler);

    this._unlistenHistory();
  }

  _scrollHandler() {
    const { scrollY, innerHeight } = window;

    let marginTop = -200;
    let opacity = 0;
    let showHomeLink = scrollY >= innerHeight;

    if (!showHomeLink) {
      marginTop = -scrollY / innerHeight * 200;
      opacity = (1 - scrollY / innerHeight) * 0.3;
    }

    this.setState({ showHomeLink, signatureStyle: { marginTop, opacity } });
  }

  _jumpToHash() {
    const { history } = this.props;
    const hash = history.location.hash.substring(1) || "home";
    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  render() {
    const { showHomeLink, signatureStyle } = this.state;
    return (
      <div id="home-wrapper">
        <div id="home" className="page">
          <Signature id="home-signature" style={signatureStyle} />
          <span>Web Developer</span>
          <span>Graphic Designer</span>
        </div>
        <div id="gallery" className="page">
          <Gallery />
        </div>
        <Link
          id="home-link"
          className={ClassNames({ show: showHomeLink })}
          to="/"
        >
          <Logo />
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape()
};

export default Home;
