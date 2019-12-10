import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
/** ======== Style ======== **/
import styles from './style.module.less'
import'./style.less'

function NavList(props) {
	const showNav = props.nav.length
	return (
		<ul>
			{
				showNav && props.nav.map(item => 
					<ul>
						<li key={item.name}>
							<NavLink to={item.url} >{item.name}</NavLink>
						</li>
					</ul>
			}
		</ul>
	)
}

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nav: [
				{name: 'css-模块化', className: 'css-module', url: '/index/cssModule'},
				{name: 'css-模块化', className: 'css-module', url: '/index/cssModule'},
				{name: 'css-模块化', className: 'css-module', url: '/index/cssModule'},
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