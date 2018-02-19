// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component {
  learn() {
    console.log("Entering password...");
  }

  render() {
    return <input type="password" onKeyUp={this.learn} />;
  }
}
export default Keypad;
