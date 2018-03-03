import { connect } from 'react-redux';

import FlashMessage from '../components/FlashMessage';
/* eslint-disable require-jsdoc */

const mapStateToProps = state => ({
  message: state.layout.loggedInAs
});
/* eslint-enable require-jsdoc */

export default connect(mapStateToProps)(FlashMessage);
