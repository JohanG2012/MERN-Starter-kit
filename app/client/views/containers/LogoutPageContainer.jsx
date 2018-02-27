import { connect } from 'react-redux';

import LogoutPage from '../pages/LogoutPage';
import { performLogout } from '../../state/session/actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(performLogout())
});

export default connect(null, mapDispatchToProps)(LogoutPage);
