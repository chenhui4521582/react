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
	hehe() {
		alert(111)
	}
	getMessage(message, haha) {
		this.setState(res=>(
			{message, haha}
		))
	}
	render() {
		return(
			<div className="index">
				<BaseHeader title={'Index'}/>
				<main>
					<p>测试background</p>
					<p>{this.state.message}</p>
					<p>{this.state.haha}</p>
					<button onClick={this.getMessage.bind(this, 222222, 333)}>获取message</button>
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index