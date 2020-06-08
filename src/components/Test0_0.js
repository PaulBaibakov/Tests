import React, { PureComponent } from 'react';
import { NavBar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './CSS/Style.css';
import {
	Link
} from "react-router-dom";
import queryString from 'query-string';

export default class Test0_0 extends PureComponent {
	constructor(props) {
		super(props);
	}
		
	render() {
		let url = location.search;
		let params = queryString.parse(url);
		console.log(params);
		return (
			<>
				Test1_1
				ID={params.id}
				Name={params.NAME}
			</>

		);
	}

}