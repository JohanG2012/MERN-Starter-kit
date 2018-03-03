import React from 'react';
import ResetForm from '../components/ResetForm';
import Center from '../commons/Center';
import BasePage from './BasePage';

/**
 * ResetPasswordPage for the /reset route
 */
const ResetPasswordPage = () => (
  <BasePage>
    <Center horizontal>
      <ResetForm />
    </Center>
  </BasePage>
);

export default ResetPasswordPage;
