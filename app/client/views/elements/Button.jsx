import styled from 'styled-components';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const Button = styled.button`
  width: 100%;
  background: ${colors.primary};
  border-color: ${colors.primary};
  color: ${colors.white};
  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  font-family: ${fonts.primary};

  &:hover {
    background: ${colors.primaryShade};
    border-color: ${colors.primaryShade};
  }
`;

export default Button;
