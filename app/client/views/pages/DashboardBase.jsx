import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../commons/Layout';
import Main from '../elements/Main';
import Footer from '../elements/Footer';
import SidebarContainer from '../containers/SidebarContainer';
import Header from '../elements/Header';
import FlashMessage from '../components/FlashMessage';

const defaultProps = {
  children: 'page'
};

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

/**
 * Used as Base for logged in Dashboard pages.
 * @param {component} children Child components, which will be the content of the page.
 */
const DashboardBase = ({ children }) => (
  <Layout sidebar>
    <SidebarContainer />
    <Layout>
      <Header />
      <Main>{children}</Main>
      <Footer>MERN Boilerplate ©2018</Footer>
    </Layout>
  </Layout>
);

DashboardBase.propTypes = propTypes;
DashboardBase.defaultProps = defaultProps;

export default DashboardBase;
