import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../constants/colors';

const Anchor = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.3s;

  &:visited {
    color: rgba(255, 255, 255, 0.65);
  }

  &:hover {
    color: ${colors.white};
  }
`;

export default Anchor;
