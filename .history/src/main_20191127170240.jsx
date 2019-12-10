import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/index'
/** ======== Components ======== **/
import Index from '@/views/index/index'
import Task from '@/views/task/task'
import Mall from '@/views/mall/mall'
import My from '@/views/my/my'
import Redux from '@/views/redux/redux'
import Routers from '@/views/routers/routers'
/** ======== Css ======== **/
import 'lib-flexible'
import '@/assets/less/base.less'

class Main extends Component {
  render() {
    return (
    	<Provider store={store}>
				<HashRouter>
					<Switch>
						<Route exact path='/' component={Index} >
							<Route patch="/index/cssmodule" component={CssModule} />
							<Route patch="/index/setstate" component={SetState} />
							<Route patch="/index/concat" component={Concat} />
							<Route patch="/index/model" component={Model} />
						</Route>
						<Route path='/task' component={Task} />
						<Route path='/mall' component={Mall} />
						<Route path='/my' component={My} />
						<Route path='/redux' component={Redux} />
						<Route path='/routers' component={Routers}/>
					</Switch>
				</HashRouter>
			</Provider>
		)
  }
}
export default Main