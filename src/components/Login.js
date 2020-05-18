import React, { PureComponent, Component } from 'React';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CSS/StyleLogin.css';
//import $ from "jquery";
import Modal from "react-bootstrap/Modal";

export default class LoginForm extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			userPassword: ''
		};
	}
	onEnterLogin() {
		this.setState({ userName: getCookie('userName'), userPassword: getCookie('userPassword')});
	}
	handleCheckBeforeSaveLogin() {
		if ((this.state.userName === "") || (this.state.userPassword === "")) {
			alert("not!");
			return false;
		} else {
			document.cookie = 'userName' + '=' + encodeURIComponent(this.state.userName);
			document.cookie = 'userPassword' + '=' + encodeURIComponent(this.state.userPassword);
			return true;

		}
	}
	
	handleOnChangeUN(e) {
		this.setState({ userName: e.target.value });
		//console.log(this.state.userName);
	}
	handleOnChangePA(e) {
		this.setState({ userPassword: e.target.value });
		//console.log(this.state.userPassword);
	}
	render() {
		return (
			<>
				<Modal className="modal-center" show={this.props.loginShowModal} onEnter={this.onEnterLogin.bind(this)} >
					<Modal.Body>
						<h5>Пользователь</h5>
						<input type="text" placeholder="Пользователь" value={this.state.userName} onChange={(e) => { this.handleOnChangeUN(e); }} />
						<h5>Пароль</h5>
						<input type="password" id="userPassword" placeholder="Пароль" value={this.state.userPassword} onChange={(e) => { this.handleOnChangePA(e); }} />
					</Modal.Body>
					<Modal.Footer>
						<button type="button" className="btn btn-primary" onClick={() => { if (this.handleCheckBeforeSaveLogin()) { this.props.handleloginShowModal(); } }}>Ok</button>
						<button type="button" className="btn btn-default" onClick={() => { this.props.handleloginShowModal(); }}>Отмена</button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}