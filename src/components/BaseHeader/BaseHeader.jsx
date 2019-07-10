import React, { Component } from 'react'
import {Link} from "react-router-dom";
/** ======== Css ======== **/
import './style.less'

class BaseHeader extends Component {
	constructor(props) {
		super(props)
	}
	back() {
		window.history.back()
	}
	render() {
    return (
			<header className="base-header">
				{
					this.props.show && this.props.url
						?
					<Link to={this.props.url} className={'back'}>返回</Link>
						:
					this.props.show
						&&
					<div className="back" onClick={this.back}>返回</div>
				}
				<div className="content">
					<img src={require('@/assets/images/react-icon.jpg')} alt=""/>
					{
						this.props.title ? this.props.title :  '学习笔记'
					}
				</div>
			</header>
		)
  }
}
export default BaseHeader