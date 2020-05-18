import React from 'react';
import './CSS/Style.css';

import { Route, Switch } from 'react-router-dom';


const Test1_1 = React.lazy(() => import('./Test1_1'));
const Test1_2 = React.lazy(() => import('./Test1_2'));


export default class CenterPanel extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props.children);
		return (
			<div id="containerWork" className="workContainer">
				
				<React.Suspense fallback={<p>Loading...</p>}>
					<Switch>
						<Route path="/Test1_1" component={Test1_1} />
						<Route path="/Test1_2" component={Test1_2} />
					</Switch>
				</React.Suspense>
				
			</div>
		);
	}
}
