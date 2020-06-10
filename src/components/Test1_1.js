import React, { PureComponent } from 'react';
import { NavBar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import './CSS/Style.css';
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

		
		let _Form;
		_Form = document.getElementById('_Form1');
		//console.log(_Form);
		let ss = queryString.stringifyUrl({
			url: '',
			query: {
				_Id: encodeURIComponent(_Form._Id.value),
				_Name: encodeURIComponent(_Form._Name.value)
			}
		}); 
		console.log('ss='+ss);
		location.search = queryString.stringifyUrl({
			url: '',
			query: {
				_Id: encodeURIComponent(_Form._Id.value),
				_Name: encodeURIComponent(_Form._Name.value)
			}
		}); 
		//_Form.elements._Id.value
		//_Form.elements._Name.value
		//return false;
		//return true;
		//submit();
		
	}

	set() {
		let url = location.search;
		let params = queryString.parse(url);
		let _Form = document.getElementById('_Form1');
		_Form._Id.value = decodeURIComponent(params._Id);
		_Form._Name.value = decodeURIComponent(params._Name);
	}
	//это с китайскими иероглифами
	// _Id=44&_Name=%D0%BF%D1%80%D0%BE%D0%B3%E4%BA%BA%E4%BA%BA%20%E9%83%BD%20%E7%88%B1%20%E5%96%9D%E5%8F%AF%E4%B9%90
		
	render() {
		return (
			<>
				<form method='GET' id='_Form1' >
					<input type='text' id='_Id' /><br />
					<input type='text' id='_Name' /><br />
					<input type='button' value='отправить' onClick={() => { this.sbm(); }} /><br />
					<input type='button' value='назначить в форму' onClick={() => { this.set(); }} /><br />
				
					Test1_1<br />

				</form>
			</>

		);
	}

}