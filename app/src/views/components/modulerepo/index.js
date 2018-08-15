import React, { Component } from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";

import { isWithinComponent } from "../../../utils";

import "./style.css";

class ModuleRepo extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };

    this.toggle = this.toggle.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
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

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.collapse);
  }

  toggle() {
    const { expanded } = this.state;
    expanded ? this.collapse() : this.expand();
  }

  render() {
    const { name, description } = this.props;
    const { expanded } = this.state;

    return (
      <div ref={r => (this.repo = r)} className="module-repo">
        <div className="name" onClick={this.toggle}>
          {name}
        </div>
        <div className={ClassNames("detail", { expanded })}>
          <div className="description">{description}</div>
          <a
            className="link"
            href={`https://waichungwong.github.io/${name}/build`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    );
  }
}

ModuleRepo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default ModuleRepo;
