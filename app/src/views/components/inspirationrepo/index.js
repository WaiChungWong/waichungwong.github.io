import React, { Component } from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";

import { isWithinComponent } from "../../../utils";

import "./style.css";

class InspirationRepo extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false, canPlayVideo: false, playVideo: false };

    this.toggle = this.toggle.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
    this.showVideo = this.showVideo.bind(this);
    this.hideVideo = this.hideVideo.bind(this);
  }

  expand() {
    this.setState({ expanded: true });

    document.addEventListener("mousedown", this.collapse);
  }

  collapse(event) {
    if (!event || !isWithinComponent(event.target, this.repo)) {
      this.setState({ expanded: false });

      document.removeEventListener("mousedown", this.collapse);
    }
  }

  showVideo() {
    const { canPlayVideo } = this.state;

    if (canPlayVideo) {
      this.setState({ playVideo: true });
      this.video.play();
    }
  }

  hideVideo() {
    const { canPlayVideo } = this.state;

    if (canPlayVideo) {
      this.setState({ playVideo: false });
      this.video.pause();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.collapse);
  }

  toggle() {
    this.state.expanded ? this.collapse() : this.expand();
  }

  render() {
    const { name, description } = this.props;
    const { expanded, playVideo } = this.state;

    return (
      <div
        ref={r => (this.repo = r)}
        className="inspiration-repo"
        onMouseEnter={this.showVideo}
        onMouseLeave={this.hideVideo}
      >
        <div className="inspiration-title" onClick={this.toggle}>
          {name}
        </div>
        <div className={ClassNames("inspiration-detail", { expanded })}>
          {description && (
            <div className="inspiration-description">{description}</div>
          )}
          <a
            className="inspiration-link"
            href={`https://waichungwong.github.io/${name}/build`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
        <video
          ref={r => (this.video = r)}
          className={ClassNames("inspiration-video", { show: playVideo })}
          preload="auto"
          loop
          onCanPlayThrough={() => this.setState({ canPlayVideo: true })}
        >
          <source
            src={`https://waichungwong.github.io/${name}/demo.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

InspirationRepo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default InspirationRepo;
