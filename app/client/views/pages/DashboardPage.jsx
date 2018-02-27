import React from 'react';
import Text from '../elements/Text';
import DashboardBase from './DashboardBase';

/**
 * DashboardPage for the /dashboard route
 */
const DashboardPage = ({ loggedInAs }) => (
  <DashboardBase>
    <Text>Welcome {loggedInAs}</Text>
  </DashboardBase>
);

export default DashboardPage;
