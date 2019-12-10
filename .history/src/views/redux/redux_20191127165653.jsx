import React, {Component} from 'react'
import {Route, NavLink, Redirect} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import State from './children/state'
import Reducer from './children/reducer'
import actions from './children/actions'
/** ======== Css ======== **/
import './styles.less'
class Redux extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div className={'redux'}>
				<BaseHeader title={'redux'} show={true} url={'/my'}/>
				<div className="nav">
					<NavLink to={'/redux/state'} exact={true} activeClassName={'active'} className={'item'}>state</NavLink>
					<NavLink to={'/redux/reducer'} activeClassName={'active'} className={'item'}>reducer</NavLink>
					<NavLink to={'/redux/actions'} activeClassName={'active'} className={'item'}>actions</NavLink>
				</div>
				<main>
					<Route path='/redux/state' exact component={State} />
					<Route path='/redux/reducer' component={Reducer} />
					<Route path='/redux/actions' component={actions} />
				</main>
			</div>
		)
	}
}
export default Redux