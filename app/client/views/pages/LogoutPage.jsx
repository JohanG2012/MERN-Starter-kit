import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const propTypes = {
  logout: PropTypes.func.isRequired
};

/**
 * LogoutPage for /logout route
 * @param {function} logout Mapped Dispatch from Container component
 */
const LogoutPage = ({ logout }) => {
  logout();

  return <Redirect to="/" />;
};

LogoutPage.propTypes = propTypes;
export default LogoutPage;
