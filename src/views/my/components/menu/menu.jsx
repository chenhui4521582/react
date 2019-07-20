import React, { Component } from "react";
import { Link } from 'react-router-dom'
/** ======== Css ======== **/
import './style.less'
class Menu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const list = this.props.list || []
		return (
			<div className="list" >
				<div className="title">
					菜单
				</div>
				<div className="items">
					{
						list && list.map((item, index) =>
							<div className="item" key={index}>
								<Link to={item.url}>
									{item.name}
								</Link>
							</div>
						)
					}
				</div>
			</div>
		)
	}
}
export default Menu