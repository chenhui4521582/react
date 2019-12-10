import React, {Component} from 'react'
import {HashRouter as Route, NavLink, Switch} from 'react-router-dom'
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
					<NavLink to={item.url} className={item.className} key={item.name}>{item.name}</NavLink>
				)
			}
		</div>
	)
}

class Demo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nav: [
				{name: 'css-模块化', className: 'css-module', url: '/demo/cssmodule'},
				{name: 'state状态更新', className: 'setState', url: '/demo/setstate'},
				{name: '父子组件传递参数', className: 'concat', url: '/demo/concat'},
				{name: '双向数据绑定', className: 'model', url: '/demo/model'}
			]
		}
	}
	render() {
		const showNav = this.state.nav.length
		return(
			<div className="index">
				<BaseHeader title={'demo'}/>
				<NavList nav={this.state.nav}></NavList>
				<hr></hr>
				<main>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
				</main>
			</div>
		)
	}
}
export default Demo