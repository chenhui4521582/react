import React, {Component} from 'react'
import Toast from '@/components/Toast'
class setState extends Component {
  constructor() {
    super()
    this.state ={
      name: 'chenhui'
    }
  }
  infoClick () {
    Toast.info('info', ()=> {
      alert(1111)
    })
  }
  handleClick() {
    this.setState(res=> ({
      hehe: 2
    }))
  }
  render(){
    return (
      <div>
        <p> hello,world {this.state.name}</p>
        <p>{this.state.hehe}</p>
        <button onClick={this.handleClick.bind(this)}>点击更新状态</button>
        <button onClick={this.infoClick}>Toast</button>
      </div>
    )
  }
}
export default setState