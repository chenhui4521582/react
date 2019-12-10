import React, {Component} from 'react'
import {Switch, NavLink, Route} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
import Concat from './children/concat'
import CssModule from './children/cssModule'
import SetState from './children/SetState'
import Model from './children/Model'
/** ======== Style ======== **/
import styles from './style.module.less'
import'./style.less'

function NavList(props) {
	const showNav = props.nav.length
	return (
		<div className="nav">
			<ul>
				{
					showNav && props.nav.map(item => 
						<li key={item.name}>
							<NavLink to={item.url} >{item.name}</NavLink>
						</li>
					)
				}
			</ul>
		</div>
	)
}

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nav: [
				{name: 'css-模块化', className: 'css-module', url: '/index/cssModule'},
				{name: 'state状态更新', className: 'setState', url: '/index/setState'},
				{name: '父子组件传递参数', className: 'concat', url: '/index/concat'},
				{name: '双向数据绑定', className: 'model', url: '/index/model'}
			]
		}
	}
	render() {
		const showNav = this.state.nav.length
		return(
			<div className="index">
				<BaseHeader title={'Index'}/>
				<NavList nav={this.state.nav}></NavList>
				<div className="nav">
					
				</div>
				<main>
					<Switch>
						<Route exact patch="/index/cssModule" Component=""></Route>
						<Route patch="/index/setState" Component=""></Route>
						<Route patch="/index/concat" Component=""></Route>
						<Route patch="/index/model" Component=""></Route>
					</Switch>
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index