import React from 'react';
import RegisterFormContainer from '../containers/RegisterFormContainer';
import Center from '../components/commons/Center';
import BasePage from './BasePage';

/**
 * RegisterPage for the /register route
 */
const RegisterPage = () => (
  <BasePage>
    <Center horizontal>
      <RegisterFormContainer />
    </Center>
  </BasePage>
);

export default RegisterPage;
