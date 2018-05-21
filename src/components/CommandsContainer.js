import React, { Component } from "react";
import InitialState from "./InitialState";
import ProjectStart from "./ProjectStart";
import Migration from "./Migration";

class CommandsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectState: null
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleStateChange = (event) => {
    this.setState({
      selectState: event.target.value
    });
  };

  handleState = () => {
    console.log(this.state.selectState);
    if (this.state.selectState === "projectStart") {
      return <ProjectStart />;
    } else if (this.state.selectState === "migration") {
      return <Migration />;
    }
  };

  render() {
    let helperCommand = this.handleState();
    return (
      <div>
        <p>Please select the state you are at: </p>
        <InitialState
          selectState={this.state.selectState}
          handleStateChange={this.handleStateChange}
        />
        {helperCommand}
      </div>
    );
  }
}

export default CommandsContainer;
