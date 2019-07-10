import React, { Component } from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
/** ======== Components ======== **/
import Index from '@/views/index/index'
import Task from '@/views/task/task'
import Mall from '@/views/mall/mall'
import My from '@/views/my/my'
import Redux from '@/views/redux/redux'

class ReactRouter extends Component {
  render() {
    return (
			<HashRouter>
				<Route exact path='/' component={Index} />
				<Route path='/task' component={Task} />
				<Route path='/mall' component={Mall} />
				<Route path='/my' component={My} />
				<Route path='/redux' component={Redux} />
			</HashRouter>
		)
  }
}

export default ReactRouter