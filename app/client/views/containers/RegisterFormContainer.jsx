import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import { createFlash } from '../../state/layout/actions';
import { registerPostData } from '../../state/register/actions';

/* eslint-disable require-jsdoc */
const mapDispatchToProps = dispatch => ({
  sendForm: (url, fields) => dispatch(registerPostData(url, fields)),
  showError: message => dispatch(createFlash('error', message)),
  showSuccess: message => dispatch(createFlash('success', message))
});

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  errors: state.register.registerHasError.errorMessages,
  success: state.register.registerPostDataSuccess
});
/* eslint-enable require-jsdoc */

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
