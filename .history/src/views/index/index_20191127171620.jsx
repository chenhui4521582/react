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
					首页
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index