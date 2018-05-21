import React, { Component } from "react";

class TextField extends Component {
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
    let textFieldMessage;
    if (this.props.textFieldMessage) {
      textFieldMessage = this.props.textFieldMessage;
    }
    return (
      <div className="text_field_wrapper">
        {textFieldMessage}
        <br />
        <br />
        <form>
          <input
            type="text"
            name="firstname"
            value={this.props.projectName}
            onChange={this.props.handleNameChange}
          />
          <br />
        </form>
      </div>
    );
  }
}

export default TextField;
