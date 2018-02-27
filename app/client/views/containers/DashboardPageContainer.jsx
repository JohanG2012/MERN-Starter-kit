import { connect } from 'react-redux';

import DashboardPage from '../pages/DashboardPage';

const mapStateToProps = state => ({
  loggedInAs: state.sessionReducer.loggedInAs.username
});
/* eslint-enable require-jsdoc */

export default connect(mapStateToProps)(DashboardPage);
