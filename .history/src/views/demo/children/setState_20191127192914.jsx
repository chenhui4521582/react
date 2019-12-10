import React, {Component} from 'react'
class setState extends Component {
  constructor() {
    super()
    this.state ={
      name: 1111
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
       
        <p> hello,world {this.state.message}</p>
        <p>{this.state.hehe}</p>
        <button onClick={this.handleClick.bind(this)}>点击更新状态</button>
      </div>
    )
  }
}
export default setState