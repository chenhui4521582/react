import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
/** ======== Style ======== **/
import styles from './style.module.less'
import'./style.less'

function NavList(props) {
	console.log(props.nav)
	const showNav = props.nav.length
	if(showNav) {
		
	}
	return showNav && props.nav.map(item => {
		return <NavLink to={item.url} key={item.name}>{item.name}</NavLink>
	})
}
class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nav: [
				{name: 'css-模块化', className: 'css-module', url: '/index/cssModule'}
			]
		}
	}
	render() {
		const showNav = this.state.nav.length
		return(
			<div className="index">
				<BaseHeader title={'Index'}/>
				<main>
					<div className="nav">
						<NavList nav={this.state.nav}></NavList>
					</div>
					<p>css  模块化</p>
					<p className={styles['background']}>CSS - modules</p>
					<p className={'background'}>测试 CSS 是否会全局污染</p>
					<p>状态机的更新</p>
					
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index