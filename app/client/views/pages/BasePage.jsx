import React from 'react';
import PropTypes from 'prop-types';
import Header from '../elements/Header';
import Brand from '../commons/Brand';
import Footer from '../elements/Footer';
import Layout from '../commons/Layout';
import Main from '../elements/Main';
import FlashMessage from '../components/FlashMessage';

const defaultProps = {
  children: 'page'
};

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

/**
 * Used as Base for pages where the user is not logged in
 * @param {components} children Child component, the content of the page
 */
const BasePage = ({ children }) => (
  <Layout className="layout">
    <Header secondary>
      <Brand align="left">MERN Boilerplate</Brand>
    </Header>
    <Main>{children}</Main>
    <Footer>MERN Boilerplate ©2018</Footer>
  </Layout>
);

BasePage.defaultProps = defaultProps;
BasePage.propTypes = propTypes;

export default BasePage;
