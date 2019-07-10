import React, {Component} from 'react'

/** ======== redux ======== **/
import Actions from '@/redux/actions/index'
import { bindActionCreators } from "redux";
import { connect } from "react-redux"


class State extends Component{
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div className="state">
				{this.props.user.name}
				<button onClick={()=>{this.props.changeUserName(1111)}}>改变</button>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	user: state.user
})
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(State)