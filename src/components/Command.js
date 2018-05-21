import React, { Component } from "react";

class Commands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <p>{this.props.output}</p>
      </div>
    );
  }
}

export default Commands;
