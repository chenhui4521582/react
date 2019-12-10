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
					url: '/demo'
				},
				{
					name: 'routers',
					url: '/routers'
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
				<Menu list={this.state.list}/>
				<BaseFooter />
			</div>
		)
	}
}

export default My