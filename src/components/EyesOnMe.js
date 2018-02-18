// Code EyesOnMe Component Here
import React from "react";

export default class EyesOnMe extends React.Component {
  focusMethod = () => {
    console.log("Good!");
  };

  blurMethod = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button onFocus={this.focusMethod} onBlur={this.blurMethod}>
        Button
      </button>
    );
  }
}
