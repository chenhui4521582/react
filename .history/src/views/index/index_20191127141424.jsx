import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
/** ======== Style ======== **/
import styles from './style.less'
import './styles'
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
					<p className={styles['background']}>测试background是否会全局污染</p>
				</main>
				<BaseFooter />
			</div>
		)
	}
}
export default Index