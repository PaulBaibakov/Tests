import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { exact } from 'prop-types';

const MainComponent = React.lazy(() => import('./components/MainComponent'));

ReactDOM.render((
	<Router>
		<React.Suspense fallback={<p>Loading...</p>}>
			<exact>
				<Route component={MainComponent} />
			</exact>
				
		</React.Suspense>
	</Router>
), document.getElementById('root'));
