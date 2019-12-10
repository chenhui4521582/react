import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
/** ======== Css ======== **/
import './style.less'
class BaseFooter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			footer: [
				{
					name: '游戏',
					url: '/',
					class: 'index'
				},
				{
					name: '任务',
					url: '/task',
					class: 'task'
				},
				{
					name: '商城',
					url: '/mall',
					class: 'mall'
				},
				{
					name: '我的',
					url: '/my',
					class: 'my'
				}
			]
		}
	}
	render() {
		return (
			<div className="base-footer">
				{
					this.state.footer.map((item, index) => (
						<NavLink
							exact={true}
							className={`item ${item.class}`}
							to={item.url}
							activeClassName={'active'}
							key={index}
						>
							{item.name}
						</NavLink>
					))
				}
			</div>
		)
	}
}

export default BaseFooter