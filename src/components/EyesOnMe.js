// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  action = () => {
    console.log("Good!");
  }

  blur = () => {
    console.log("Hey! Eyes on me!")
  }


  render() {
    return (
      <button onBlur={this.blur} onFocus={this.action}></button>
    )
  }
}

export default EyesOnMe;
