import React, {Component} from 'react'
class setState extends Component {
  constructor() {
    super()
    this.state ={
      message: 1111
    }
  }
  handleClick() {
    this.setState(res=> ({
      hehe: 2
    }))
  }
  render(){
    return (
      <div>
        hello,world
        {this.state.message}
        {this.state.hehe}
        <button onClick={this.handleClick}>点击更新状态</button>
      </div>
    )
  }
}
export default setState