import React, { PureComponent } from 'react';
import { NavBar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './CSS/Style.css';
import {
	Link
} from "react-router-dom";
import queryString from 'query-string';

export default class Test1_1 extends PureComponent {
	constructor(props) {
		super(props);
	}

	sbm() {
		//return false;

		
		//let _Form;
		//_Form = document.forms[0];
		//console.log(_Form);
		let ss = queryString.stringifyUrl({
			url: '/?',
			query: {
				_Id: 'idValue',
				_Name: 'NameValue'
			}
		}); 
		console.log('ss='+ss);
		location.search = queryString.stringifyUrl({
			url: '/',
			query: {
				_Id: 'idValue',
				_Name: 'NameValue'
			}
		}); 
		//_Form.elements._Id.value
		//_Form.elements._Name.value
		//return false;
		//return true;
		submit();
		
	}
		
	render() {
		//console.log(window.location.href);
		let url = location.search;
		//console.log(location);
		let params = queryString.parse(url);
		
		console.log(params);

		console.log(params._Id);
		console.log(params._Name);
		return (
			<>
				<form method='GET' onSubmit={() => { this.sbm(); }} >
					<input type='text' id='_Id' value={params._Id} />
					<input type='text' id='_Name' value={params._Name} />
					<input type='submit' value='отправить' />
				
					Test1_1<br />

				</form>
			</>

		);
	}

}