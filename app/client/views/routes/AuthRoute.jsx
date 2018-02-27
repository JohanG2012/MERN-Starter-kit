import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  access: PropTypes.arrayOf(PropTypes.string).isRequired,
  role: PropTypes.string.isRequired
};

const AuthRoute = ({ component: Component, access, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.sessionReducer.loggedInAs.isLoggedIn
});

AuthRoute.propTypes = propTypes;
export default connect(mapStateToProps)(AuthRoute);
