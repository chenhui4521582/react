import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
class Task extends Component {
	render() {
		return(
			<div className={'task'}>
				<BaseHeader title={'Task'}/>
				<main>
					task
				</main>
				<BaseFooter />
			</div>
		)
	}
}

export default Task