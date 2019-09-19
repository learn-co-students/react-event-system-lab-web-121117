// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     currentSlideIndex: 0
  //   }
  // }
  sayGood = () => {
    console.log('Good!');
  }

  getAttention = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.sayGood} onBlur={this.getAttention}></button>
    )
  }
}

export default EyesOnMe;
