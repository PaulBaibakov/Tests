import React, { PureComponent } from 'react';
import { NavBar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './CSS/Style.css';
import {
	Link
} from "react-router-dom";

export default class MainMenu extends PureComponent {
	constructor(props) {
		super(props);
	}
		
	render() {
		return (
			<div className="menuContainer">
				<nav className="navbar navbar-expand-xl navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
					<div className="navbar-brand" style={{ width: "50%" }}><center> Логотип</center> </div>

					<NavDropdown id="test1" title="test1">
						<NavDropdown.Item ><Link to="/Test1_1"> test1_1</Link> </NavDropdown.Item>
						<NavDropdown.Item ><Link to="/Test1_2"> test1_2</Link> </NavDropdown.Item>
					</NavDropdown>
					<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
					<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
					<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
					<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
					<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
				</nav>
			</div>
		);
	}

}