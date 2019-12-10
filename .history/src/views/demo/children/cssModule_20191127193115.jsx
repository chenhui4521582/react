import React, {Component} from 'react'
import '../style.less'
import Styles from '../style.module.less'
class CssModule extends Component {
  render() {
    return (
      <div>
        <p className={'background'}></p>
        <p></p>
      </div>
    )
  }
}
export default CssModule
