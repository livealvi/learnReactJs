import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      const: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      const: this.state.const + 1,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.incrementCount}>
            Count: {this.state.const}
          </button>
        </div>
      </div>
    );
  }
}
export default ClassCounter;
