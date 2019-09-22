// Code Keypad Component Here
import React from "react";

//create keyPad react component
class Keypad extends React.Component {
  //when event fires print out the following
  keyUpEvent = () => {
    console.log("Entering password...");
  };

  render() {
    //render input with right type || "oneKeyUp" --> our event handler that listens for keyUp event
    return <input type="password" onKeyUp={this.keyUpEvent} />;
  }
}

export default Keypad;
