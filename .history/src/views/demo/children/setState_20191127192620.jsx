import React, {Component} from 'react'
class setState extends Component {
  constructor() {
    super()
    this.state ={
      message: 1111
    }
  }
  render(){
    return (
      <div>{this.state.message}</div>
      <div>{this.state.hehe}</div>
    )
  }
}
export default setState