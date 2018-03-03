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
 * RegisterForm Component
 */
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.sendForm = props.sendForm;
  }
  state = { fields: { name: '', password: '', email: '' }, errorMessages: [] };

  handleChange = event => {
    const fields = { ...this.state.fields, [event.target.name]: event.target.value };
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
    this.state.fields.name.length < 1 ? errorMessages.push('You need to enter a name') : null;

    if (errorMessages.length === 0) {
      this.sendForm(`${BASE_URI}/auth/signup`, this.state.fields);
    } else {
      this.setState({ errorMessages });
    }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          type="text"
          prefix="\f023"
          placeholder="&#xf003; Name"
          onChange={this.handleChange}
          value={this.state.fields.name}
        />
        <Input
          name="email"
          type="text"
          prefix="\f023"
          placeholder="&#xf003; Email"
          onChange={this.handleChange}
          value={this.state.fields.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="&#xf13e;  Password"
          onChange={this.handleChange}
          value={this.state.fields.password}
        />
        {this.state.errorMessages.map(errorMessage => <Text error>{errorMessage}</Text>)}
        {this.props.errors.map(errorMessage => <Text error>{errorMessage}</Text>)}
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onChange={this.handleChange}
        >
          Register
        </Button>
        <Text small inline>
          Or
        </Text>{' '}
        <Anchor to="/">login!</Anchor>
        {this.props.success ? <Redirect to="/" /> : null}
      </Form>
    );
  }
}

RegisterForm.defaultProps = defaultProps;

export default RegisterForm;
