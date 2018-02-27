import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../../elements/Input';
import Anchor from '../../elements/Anchor';
import Button from '../../elements/Button';
import Form from '../../elements/Form';
import Text from '../../elements/Text';
import { BASE_URI } from '../../../configs/URI';

const defaultProps = {
  errors: []
};

/**
 * LoginForm Component
 */
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.sendForm = this.props.sendForm;
  }

  state = {
    fields: {
      email: '',
      password: ''
    },
    errorMessages: []
  };

  handleChange = event => {
    const fields = Object.assign(this.state.fields, { [event.target.name]: event.target.value });
    this.setState({ fields });
  };

  handleSubmit = event => {
    event.preventDefault();

    const errorMessages = [];
    this.state.fields.email.length < 1
      ? errorMessages.push('You need to enter an email adress.')
      : null;
    this.state.fields.password.length < 8
      ? errorMessages.push('Password needs to be atleast 8 characters.')
      : null;

    if (errorMessages.length === 0) {
      this.sendForm(`${BASE_URI}/auth/login`, this.state.fields);
    } else {
      this.setState({ errorMessages });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="email"
          type="text"
          prefix="\f023"
          placeholder="&#xf003; Email"
          value={this.state.fields.email}
          onChange={this.handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="&#xf13e;  Password"
          value={this.state.fields.password}
          onChange={this.handleChange}
        />
        {this.state.errorMessages.map(errorMessage => <Text error>{errorMessage}</Text>)}
        {this.props.errors.map(errorMessage => <Text error>{errorMessage}</Text>)}
        <Anchor align="right" to="/reset">
          Forgot password
        </Anchor>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <Text small inline>
          Or
        </Text>{' '}
        <Anchor to="/register">register now!</Anchor>
        {this.props.isLoggedIn ? <Redirect to="/dashboard" /> : null}
      </Form>
    );
  }
}

LoginForm.defaultProps = defaultProps;

export default LoginForm;
