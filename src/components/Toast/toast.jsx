import React, {Component} from 'react'
import './toast.less'

class Toast extends Component {
  constructor () {
    super()
    this.transitionTime = 1500
    this.state = {
      notice: []
    }
  }
  removeNotice () {
    const { notice } = this.state
    notice[0].onClose && notice[0].onClose()
    this.setState({
      notice: [],
    })
  }
  addNotice (notice) {
    if(this.timer) clearTimeout(this.timer)
    this.setState({
      notice: [{...notice}]
    })
    if(notice.duration > 0) this.transitionTime = notice.duration
    this.timer = setTimeout(() => {
      this.removeNotice()
    }, this.transitionTime)
    
  }
  render () {
    const { notice } = this.state
    const icons = {
      info: 'toast_info',
      success: 'toast_success',
      error: 'toast_error',
      loading: 'toast_loading'
    }
    return (
      <div className="toast">
        {
          notice.map((notice, index) => (
            <div className="toast_bg" key={index}>
              <div className='toast_box'>
                <div className={`toast_icon ${icons[notice.type]}`}></div>
                <div className='toast_text'>{notice.content}</div> 
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Toast
