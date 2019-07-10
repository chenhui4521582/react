import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'

class Login extends Component{
	render() {
		return(
			<div className="login">
				<BaseHeader title="Login" show={true} />
			</div>
		)
	}
}
export default Login