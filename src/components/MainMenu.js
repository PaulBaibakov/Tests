import React, { PureComponent } from 'react';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import 'bootstrap';
import './CSS/Style.css';
import {Link} from "react-router-dom";

export default class MainMenu extends PureComponent {
	constructor(props) {
		super(props);
	}
		
	render() {
		return (
			<div className="menuContainer">

				<Nav className="navbar navbar-light nn">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main" aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div className="navbar-brand"><center> Логотип</center> </div>

				</Nav>
				<div className="collapse nn" id="navbar-main">
					<div className="row">
						<div className="col-md-2 col-lg-3">
							<NavItem><button type="button" className="btn btn-outline-primary">btn</button> </NavItem>
						</div>
						<div className="col-md-2">
							<NavItem><button type="button" className="btn btn-outline-primary" ><Link to="/Test1_1"> test1_1</Link></button> </NavItem>
						</div>
						<div className="col-md-2">
							<NavDropdown id="test1" title="test1" >
								<NavDropdown.Item><Link to="/Test1_1"> test1_1</Link> </NavDropdown.Item>
								<NavDropdown.Item ><Link to="/Test1_2"> test1_2</Link> </NavDropdown.Item>
							</NavDropdown>
						</div>
						<div className="col-md-2">
							<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
						</div>
						<div className="col-md-4 col-lg-3">
							<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
						</div>
					</div>
					<div className="row">
						<div className="col-md-2 col-lg-3">
							<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
						</div>
						<div className="col-md-2">
							<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
						</div>
						<div className="col-md-2">
							<NavItem><div className="menuItem"><Link to="/Test1_2"> test1_2</Link></div> </NavItem>
						</div>
						<div className="col-md-2">
							<NavItem><button type="button" className="btn btn-outline-primary">btn</button> </NavItem>
						</div>
						<div className="col-md-2 col-lg-3">
							<NavItem><button type="button" className="btn btn-outline-primary" ><Link to="/Test1_1"> test1_1</Link></button> </NavItem>
						</div>
					</div>
				</div>
			</div>
		);
	}

}