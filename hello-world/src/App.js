import React, { Component } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        {/* <Greet name="Bruce" heroName="Batman">
          <p>this is children props 1</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <p>this is children props 2</p>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman">
          <button>Action</button>
        </Greet>
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Hello /> */}
      </div>
    );
  }
}
export default App;
