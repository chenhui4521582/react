import React, {Component} from 'react'
import {Switch, NavLink, Route, Router} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
import Concat from './children/concat'
import CssModule from './children/cssModule'
import SetState from './children/setState'
import Model from './children/model'
/** ======== Style ======== **/
import styles from './style.module.less'
import'./style.less'

function NavList(props) {
	const showNav = props.nav.length
	return (
		<div className={styles.nav}>
			{
				showNav && props.nav.map(item => 
					<NavLink to={item.url} className={item.className} key={item.name}>{item.name}</Link>
				)
			}
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
				<hr></hr>
				<main>
					<Switch>
						<Route patch="/index/cssModule" component={CssModule}></Route>
						<Route patch="/index/setState" component={SetState}></Route>
						<Route patch="/index/concat" component={Concat}></Route>
						<Route patch="/index/model" component={Model}></Route>
					</Switch>
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index