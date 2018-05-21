import React, { Component } from "react";
import CommandsContainer from "./components/CommandsContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Rails Command Helper!</h1>
        <CommandsContainer />
      </div>
    );
  }
}

export default App;
