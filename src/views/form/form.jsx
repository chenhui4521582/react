import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
/** ======== Components ======== **/
import Bind from './children/bind'
import Input from './children/input'
import Login from './children/login'

class Form extends Component {
	render() {
		return(
			<Switch>
				<Route exact path="/form" component={Bind} />
				<Route path="/form/bind" component={Bind} />
				<Route path="/form/input" component={Input} />
				<Route path="/form/login" component={Login} />
			</Switch>
		)
	}
}

export default Form