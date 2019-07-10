import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'

class Bind extends Component{
	render() {
		return(
			<div className="bind">
				<BaseHeader title="Bind" show={true} />
			</div>
		)
	}
}

export default Bind