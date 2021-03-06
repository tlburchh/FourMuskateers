import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';

class SignupForm extends Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    AUTH.signup({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }).then(response => {
      if (response.data.errors) {
        alert(`Error: ${response.data.message}`);
      }
      else if (!response.data.error) {
        alert("Account created successfully");
        this.setState({
          redirectTo: '/'
        });
      }
      else if (response.data.error) {
        alert(response.data.error);
      }
      else {
        console.log("Something is wrong...");
      }
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }

    return (
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card title="Register for Starrlight's List">
              <form style={{ marginTop: 10 }}>
                <label htmlFor="firstName">First name: </label>
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <label htmlFor="lastName">Last name: </label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Email: </label>
                <Input
                  type="text"
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
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <Link to="/">Login</Link>
                <FormBtn onClick={this.handleSubmit}>Register</FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    )
  }
}

export default SignupForm;
