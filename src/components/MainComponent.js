import React, { PureComponent } from 'react';
import CenterPanel from './CenterPanel';


import './CSS/Style.css';
import MainMenu from './MainMenu';

export default class MainComponent extends PureComponent {
	constructor(props) {
		super(props);
	} 
	
	render() {
		return (
			<>
				<MainMenu />
				<CenterPanel />
			</>
			);
	}
}