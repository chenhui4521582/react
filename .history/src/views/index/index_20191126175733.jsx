import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'

class Index extends Component {
	constructor(props) {
		super(props)
	}
	state= {
		haha:1,
		message: '1111'
	}
	componentWillMount() {
	}

	getMessage() {
		this.setState({message: '2222'}
	}

	render() {
		return(
			<div className="index">
				<BaseHeader title={'Index'}/>
				<main>
					<p>{this.state.message}</p>
					<p>{this.state.haha}</p>
					<button onClick={()=> {
					)
					}}>获取message</button>
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index