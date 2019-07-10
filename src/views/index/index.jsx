import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'

class Index extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div className="index">
				<BaseHeader title={'Index'}/>
				<main>
					index
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index