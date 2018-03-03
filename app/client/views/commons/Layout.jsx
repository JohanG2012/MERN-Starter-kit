import styled from 'styled-components';
import colors from '../constants/colors';

const Layout = styled.div`
  ${props =>
    props.sidebar
      ? `
    background: ${colors.background};
    min-height: 100vh;
    flex-direction: row;
    box-sizing: border-box;
    flex: auto;
    display: flex;
    `
      : `
    background: ${colors.background};
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: auto;
    overflow-x: hidden;
      `};
`;

export default Layout;
