import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
class Mall extends Component {
	render() {
		return(
			<div className={'mall'}>
				<BaseHeader title={'Mall'}/>
				<main>
					mall
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Mall
