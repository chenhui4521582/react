import React, {Component} from 'react'
import Router from './router/router'
import { Provider } from 'react-redux'
import store from '@/redux/index'
/** ======== Css ======== **/
import 'lib-flexible'
import '@/assets/less/base.less'

class Main extends Component {
  render() {
    return (
    	<Provider store={store}>
				<Router />
			</Provider>
		)
  }
}
export default Main