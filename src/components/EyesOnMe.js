import React from 'react'

class EyesOnMe extends React.Component {

  see = () => console.log('Good!')
  dontSee = () => console.log('Hey! Eyes on me!')

  render() {
    return(
      <button onBlur={this.dontSee} onFocus={this.see}>Click?</button>
    );
  }
}

export default EyesOnMe;
