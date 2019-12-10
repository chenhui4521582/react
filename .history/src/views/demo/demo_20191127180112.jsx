import React, {Component} from 'react'
import {HashRouter, Route, NavLink, Switch} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
import Concat from './children/concat'
import CssModule from './children/cssModule'
import SetState from './children/setState'
import Model from './children/model'
/** ======== Style ======== **/
import styles from './style.module.less'

function NavList(props) {
	const showNav = props.nav.length
	return (
		<div className={styles.nav}>
			{
				showNav && props.nav.map(item => 
					<NavLink to={item.url} className={item.className} key={item.name} activeClassName={styles['active']}>{item.name}</NavLink>
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
				{name: '父子组件传递', className: 'concat', url: '/demo/concat'},
				{name: '双向数据绑定', className: 'model', url: '/demo/model'}
			]
		}
	}
	render() {
		const showNav = this.state.nav.length
		return(
			<div className="index">
				<BaseHeader title={'demo'} show={true} url={'/my'}/>
				<NavList nav={this.state.nav}></NavList>
				<main>
          <Route path='/demo/cssmodule' component={CssModule} />
          <Route path="/demo/setstate" component={SetState}></Route>
          <Route path="/demo/concat" component={Concat}></Route>
          <Route path="/demo/model" component={Model}></Route>
				</main>
			</div>
		)
	}
}
export default Demo