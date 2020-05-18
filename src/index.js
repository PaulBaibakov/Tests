import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const MainComponent = React.lazy(() => import('./components/MainComponent'));

ReactDOM.render((
	<Router>
		<React.Suspense fallback={<p>Loading...</p>}>
			<Route component={MainComponent} />
				
		</React.Suspense>
	</Router>
), document.getElementById('root'));
