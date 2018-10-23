import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';

class LoginForm extends Component {

	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			redirectTo: null
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {

		event.preventDefault();
		console.log(`Loggin in with: ${this.state.email} and ${this.state.password}`);
		this.props.login(this.state.email, this.state.password);
		this.setState({
			redirectTo: '/'
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<Container>
					<Row>
						<Col size="md-3"></Col>
						<Col size="md-6">
							<Card title="Login to React Reading List">
								<form style={{ marginTop: 10 }}>
									<label htmlFor="email">Email: </label>
									<Input
										type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
									<label htmlFor="password">Password: </label>
									<Input
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
									<Link to="/signup">Register</Link>
									<FormBtn onClick={this.handleSubmit}>Login</FormBtn>
								</form>
							</Card>
						</Col>
						<Col size="md-3"></Col>
					</Row>
				</Container>
			)
		}
	}
}

export default LoginForm;