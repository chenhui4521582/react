import React, {Component} from 'react'

class Ts extends Component {
  state = {
    a:1,
    b:2
  }
  handleClick() {
    this.setState(()=> ({
      a: 2
    }))
  }
  render() {
    return (
      <div className="ts">
        {this.state.a}
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
    )
  }
}

export default Ts