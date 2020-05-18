import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import LoginForm from './Login';
import MainMenu from './MainMenu';

export default class TopPanel extends PureComponent {
	render() {
		return (
			<div>
				<MainMenu />
			</div>
		)
	}
}
