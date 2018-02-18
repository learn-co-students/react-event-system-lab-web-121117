import React from 'react'

class EyesOnMe extends React.Component{

  onMe = () => {
    console.log('Good!')
  }

  offMe = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button onFocus={this.onMe} onBlur={this.offMe}>Button</button>
    )
  }
}

export default EyesOnMe
