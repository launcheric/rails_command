import React, { Component } from "react";

class DropdownSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    let options = this.props.options.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
    let dropdownMessage;
    if (this.props.dropdownMessage) {
      dropdownMessage = this.props.dropdownMessage;
    }
    return (
      <div className="dropdown_select">
        <label>
          {dropdownMessage}
          <br />
          <select
            value={this.props.value}
            onChange={this.props.handleSelectOption}
          >
            <option lable=" "> Select an Option </option>
            {options}
          </select>
        </label>
      </div>
    );
  }
}

export default DropdownSelect;
