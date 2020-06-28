import React from 'react'

class Keypad extends React.Component {

  passwordEnt = () => console.log('Entering password...')

  render() {
    return(
      <input onKeyUp={this.passwordEnt} type="password" />
    )
  }
}

export default Keypad
