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
      <div>
        hello,world
        {this.state.message}
        {this.state.hehe}
        <button>点击更新状态</button>
      </div>
    )
  }
}
export default setState