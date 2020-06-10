import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
//import { exact } from 'prop-types';

const MainComponent = React.lazy(() => import('./components/MainComponent'));
//import Test0_0 from './components/Test0_0';
/*
ReactDOM.render(
	<Test0_0 />,
	document.getElementById('root')
);
*/

ReactDOM.render((
	<Router>
		<React.Suspense fallback={<p>Loading...</p>}>
			
				<Route component={MainComponent} />
			
				
		</React.Suspense>
	</Router>
), document.getElementById('root'));
