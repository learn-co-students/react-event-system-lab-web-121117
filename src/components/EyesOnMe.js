import React from 'react'

class EyesOnMe extends React.Component {

  state = {}

  handleBlur() {
    console.log('Hey! Eyes on me!')
  }

  handleFocus() {
    console.log('Good!')
  }

  render() {
    return (
      <button onBlur={this.handleBlur} onFocus={this.handleFocus} >El ClickyThingy</button>
    );
  }
}

export default EyesOnMe
