import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'

class Input extends Component{
	render() {
		return(
			<div className="input">
				<BaseHeader title="Input" show={true} />
			</div>
		)
	}
}

export default Input