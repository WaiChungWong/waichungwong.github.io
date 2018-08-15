import React, { Component } from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";

import { isWithinComponent } from "../../../utils";

import "./style.css";

class InspirationRepo extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false, canPlayVideo: false };

    this.toggle = this.toggle.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  expand() {
    this.setState({ expanded: true });
    this.video.play();

    document.addEventListener("mousedown", this.collapse);
  }

  collapse(event) {
    if (!event || !isWithinComponent(event.target, this.repo)) {
      this.setState({ expanded: false });
      this.video.pause();

      document.removeEventListener("mousedown", this.collapse);
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
    const { expanded, canPlayVideo } = this.state;

    return (
      <div ref={r => (this.repo = r)} className="inspiration-repo">
        <div className="name" onClick={this.toggle}>
          {name}
        </div>
        <div className={ClassNames("content", { expanded })}>
          <div className="detail">
            {description && <div className="description">{description}</div>}
            <a
              className="link"
              href={`https://waichungwong.github.io/${name}/build`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
          <video
            ref={r => (this.video = r)}
            className={ClassNames("video", {
              expanded: expanded && canPlayVideo
            })}
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
      </div>
    );
  }
}

InspirationRepo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default InspirationRepo;
