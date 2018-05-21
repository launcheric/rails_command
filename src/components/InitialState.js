import React, { Component } from "react";

class InitialState extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="stateWrapper">
        <ul className="list-unstyled">
          <li>
            <label>
              <input
                type="radio"
                value="projectStart"
                checked={this.props.selectState === "projectStart"}
                onChange={this.props.handleStateChange}
              />
              Start a project
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="migration"
                checked={this.props.selectState === "migration"}
                onChange={this.props.handleStateChange}
              />
              Handle Migration
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="large"
                checked={this.props.selectState === "large"}
                onChange={this.props.handleStateChange}
              />
              Large
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default InitialState;
