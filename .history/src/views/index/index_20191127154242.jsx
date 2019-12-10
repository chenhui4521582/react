import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
/** ======== Style ======== **/
import styles from './style.module.less'
import'./style.less'

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nav: [
				{name: 'css-模块化', className: 'css-module', }
			]
		}
	}
	render() {
		return(
			<div className="index">
				<BaseHeader title={'Index'}/>
				<main>
					<div className="nav">
						{
							()=> {
								let showNav = this.state.nav.length
								showNav && this.state.map(item => {
									return <NavLink>{item.name}</NavLink>
								})
							}
						}
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