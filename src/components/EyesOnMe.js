// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  printGood = () => {
    console.log('Good!');
  }

  printHey = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <button onFocus={this.printGood} onBlur={this.printHey}>Eyes On Me</button>
    )
  }
}

export default EyesOnMe;
