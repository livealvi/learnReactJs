import React, { Component } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  }
}
export default App;
