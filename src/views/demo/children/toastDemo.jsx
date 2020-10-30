import React, {Component, Fragment} from 'react'
import '../style.module.less'
import Toast from '@/components/Toast'
class ToastDemo extends Component {

  infoClick () {
    Toast.info('info', ()=> {
      alert(1111)
    }, 3000)
  }
  successClick () {
    Toast.success('success')
  }
  loadingClick () {
    Toast.loading()
  }
  render () {
    return (
      <div className={`toast-demo`}>
        <div className={`info item`} onClick={this.infoClick}>info</div>
        <div className="success item" onClick={this.successClick}>success</div>
        <div className="loading item" onClick={this.loadingClick}>loading</div>
      </div>
    )
  }
}

export default ToastDemo;