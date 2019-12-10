import React, {Component} from 'react'
import '../style.less'
import Styles from '../style.module.less'
class CssModule extends Component {
  render() {
    return (
      <div>
        <p className={'background'}>  全局background 样式</p>
        <p> 局部background 样式</p>
      </div>
    )
  }
}
export default CssModule
