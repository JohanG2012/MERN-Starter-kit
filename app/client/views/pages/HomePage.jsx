import React from 'react';
import LoginFormContainer from '../containers/LoginFormContainer';
import Center from '../components/commons/Center';
import BasePage from './BasePage';

/**
 * HomePage for the root (/) route
 */
const HomePage = () => (
  <BasePage>
    <Center horizontal>
      <LoginFormContainer />
    </Center>
  </BasePage>
);

export default HomePage;
