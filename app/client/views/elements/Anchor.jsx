import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const defaultProps = {
  align: 'none'
};

const Anchor = styled(Link)`
  color: ${colors.primary};
  cursor: pointer;
  float: ${props => props.align};
  text-decoration: none;
  font-family: ${fonts.primary};
  font-size: 12px;
`;

Anchor.defaultProps = defaultProps;

export default Anchor;
