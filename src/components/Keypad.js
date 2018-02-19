import React from 'react';

class Keypad extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     currentSlideIndex: 0
  //   }
  // }
  passFeedback = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.passFeedback} />
    )
  }
}

export default Keypad;
