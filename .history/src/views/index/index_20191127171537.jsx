import React, {Component} from 'react'
import {HashRouter as Route, NavLink, Switch} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
import Concat from '../demo/children/concat'
import CssModule from '../demo/children/cssModule'
import SetState from '../demo/children/setState'
import Model from '../demo/children/model'

class Index extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const showNav = this.state.nav.length
		return(
			<div className="index">
				<BaseHeader title={'Index'}/>
				<main>
					首页
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index