import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'


function createNotification () {
  const toastWrap = document.createElement('div')
  document.body.appendChild(toastWrap)
  const notification = ReactDOM.render(<Toast />, toastWrap)
  return  {
    addToasst (notice) {
      return notification.addNotice(notice)
    },
    destory () {
      ReactDOM.unmountComponentAtNode(div)
      document.removeChild(div)
    }
  }
}

let notification
const notice = (type, content, onClose, duration, ) => {
  if(!notification) notification = createNotification()
  return notification.addToasst({type, content, onClose, duration})
} 

export default {
  info (content, onClose, duration ) {
    return notice('info', content, onClose, duration)
  },
  success (content, onClose, duration) {
    return notice('success', content, onClose, duration)
  }, 
  error (content, onClose, duration) {
    return notice('error', content, onClose, duration)
  },
  loading (content, onClose, duration) {
    return notice('loading', content, onClose, duration)
  }
}

