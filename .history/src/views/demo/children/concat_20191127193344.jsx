import React, {Component} from 'react'
class parentComponent extends Component {
  constructor(props) {
    super(props)
  }
}

class childrenComponent extends Component {
  constructor(props) {
    super(props)
  }
}



class concat extends Component {
  render(){
    return (
      <div>
        <p>父传值到子组件</p>

      </div>
    )
  }
}
export default concat