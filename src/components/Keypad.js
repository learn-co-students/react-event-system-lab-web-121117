// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {

  action = () => {
    console.log("Entering password...");
  }


  render() {
    return (
      <input type="password" onKeyUp={this.action}/>
    )
  }
}

export default Keypad;
