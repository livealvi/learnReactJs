import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("Click Class Click");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
