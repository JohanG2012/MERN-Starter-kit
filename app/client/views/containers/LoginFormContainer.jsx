import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { createFlash } from '../../state/layout/actions';
import { performLogin } from '../../state/session/actions';

/* eslint-disable require-jsdoc */
const mapDispatchToProps = dispatch => ({
  sendForm: (url, fields) => dispatch(performLogin(url, fields)),
  showError: message => dispatch(createFlash('error', message)),
  showSuccess: message => dispatch(createFlash('success', message))
});

const mapStateToProps = state => ({
  isLoggedIn: state.sessionReducer.loggedInAs.isLoggedIn,
  errors: state.sessionReducer.loginHasError.errorMessages
});
/* eslint-enable require-jsdoc */

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
