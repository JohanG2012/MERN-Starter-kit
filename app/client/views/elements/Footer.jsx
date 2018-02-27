import styled from 'styled-components';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const Footer = styled.footer`
  text-align: center;
  padding: 24px 50px;
  color: ${colors.secondary};
  flex: 0 0 auto;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: ${fonts.primary};
  color: rgba(0, 0, 0, 0.65);
`;

export default Footer;
