import React from 'react';
import Input from '../../elements/Input';
import Anchor from '../../elements/Anchor';
import Button from '../../elements/Button';
import Form from '../../elements/Form';
import Text from '../../elements/Text';

/**
 * ResetForm Component
 */
const RegisterForm = () => (
  <Form>
    <Input type="text" prefix="\f023" placeholder="&#xf003; Email" />
    <Button type="primary" htmlType="submit" className="login-form-button">
      Reset
    </Button>
    <Text small inline>
      Or
    </Text>{' '}
    <Anchor to="/">login!</Anchor>
  </Form>
);

export default RegisterForm;
