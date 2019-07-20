import React, {Component} from 'react'
/** ======== Components ======== **/
import BaseHeader from '@/components/BaseHeader/BaseHeader'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
import Menu from './components/menu/menu'

class My extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [
				{
					name: 'redux',
					url: '/redux'
				},
				{
					name: 'form',
					url: '/redux'
				},
				{
					name: 'typeScript',
					url: '/ts'
				}
			]
		}
	}
	gohome() {
		this.props.history.push({pathname: '/', query: {a: 111}})
	}
	render() {
		return(
			<div className={'my'}>
				<BaseHeader title={'My'}/>
				<main>
					<Menu list={this.state.list}/>
				</main>
				<BaseFooter />
			</div>
		)
	}
}

export default My