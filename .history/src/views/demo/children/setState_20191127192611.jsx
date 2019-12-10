import React, {Component} from 'react'
class setState extends Component {
  constructor() {
    super()
    this.state ={
      message: 1
    }
  }
  render(){
    return (
      <div>{this.state.message}</div>
    )
  }
}
export default setState