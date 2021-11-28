import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    //const { sate1, state2 } = this.state;
    return (
      <h1>
        Class Component: {this.props.name} - {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
