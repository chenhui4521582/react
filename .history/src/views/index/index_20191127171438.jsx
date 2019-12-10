import React, {Component} from 'react'
import {HashRouter as Route, NavLink, Switch} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
import Concat from '../demo/children/concat'
import CssModule from '../demo/children/cssModule'
import SetState from '../demo/children/setState'
import Model from '../demo/children/model'
/** ======== Style ======== **/
import styles from './style.module.less'
import'./style.less'

function NavList(props) {
	const showNav = props.nav.length
	return (
		<div className={styles.nav}>
			{
				showNav && props.nav.map(item => 
					<NavLink to={item.url} className={item.className} key={item.name}>{item.name}</NavLink>
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
				{name: 'css-模块化', className: 'css-module', url: '/index/cssmodule'},
				{name: 'state状态更新', className: 'setState', url: '/index/setstate'},
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
					首页
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index