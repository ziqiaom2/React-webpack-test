import React, { Component, Fragment, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from "./router/routes.js";

import Demo from './components/demo'
import './App.css'
export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						{
							routes.map((item) => {
								return (
									<Route exact={item.exact} path={item.path} key={item.path}
										render={props => (
											<item.component {...props} routes={item.children} />
										)} />
								)
							})
						}
					</Switch>
				</Suspense>
			</Fragment>
		)
	}
}
