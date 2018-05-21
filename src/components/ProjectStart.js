import React, { Component } from "react";
import DropdownSelect from "./DropdownSelect";
import TextField from "./TextField";
import StartConst from "../constant/StartConst";
import Command from "./Command";
class ProjectStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: "",
      command: null,
      projectName: ""
    };
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleSelectOption = (e) => {
    let option = e.target.value;
    this.setState({ optionSelected: option });
    Object.keys(StartConst).forEach((key) => {
      if (key === option) {
        let commandL = StartConst[key];
        this.setState({ command: commandL });
      }
    });
  };
  handleNameChange = (e) => {
    //take out the space in the name for naming conventions
    // https://stackoverflow.com/questions/1172206/how-to-check-if-a-text-is-all-white-space-characters-in-client-side
    let tempName = e.target.value.replace(/^\s+|\s+$/g, "");
    this.setState({ projectName: tempName });
  };
  render() {
    let selectedMessage;
    if (this.state.optionSelected) {
      selectedMessage = `You have selected ${this.state.optionSelected}`;
    }
    let dropdownMessage =
      "Select Rails defult or Make_it_so Gem for starting a project:";
    let textFieldMessage = "Please enter the project name:";
    let command = this.state.command + " " + this.state.projectName;
    return (
      <div className="subWrapper">
        <div className="main-options">
          <DropdownSelect
            options={StartConst.Options}
            value={this.state.optionSelected}
            handleSelectOption={this.handleSelectOption}
            dropdownMessage={dropdownMessage}
          />
          <br />
          <div className="message">{selectedMessage}</div>
          <TextField
            textFieldMessage={textFieldMessage}
            projectName={this.state.projectName}
            handleNameChange={this.handleNameChange}
          />
        </div>
        <br />
        <div className="command">
          <Command output={command} />
        </div>
      </div>
    );
  }
}

export default ProjectStart;
