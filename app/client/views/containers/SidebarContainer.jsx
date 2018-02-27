import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { collapseSidebar } from '../../state/layout/actions';

/* eslint-disable require-jsdoc */
const mapDispatchToProps = dispatch => ({
  collapseSidebar: () => dispatch(collapseSidebar())
});

const mapStateToProps = state => ({
  sidebarIsCollapsed: state.layoutReducer.collapseSidebar
});
/* eslint-enable require-jsdoc */

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
