import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class Component {this.props.name} - {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
