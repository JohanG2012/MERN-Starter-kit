import styled from 'styled-components';
import colors from '../constants/colors';

const Input = styled.input`
  font-family: 'FontAwesome';
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  margin-bottom: 24px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:selection {
    border-color: ${colors.primary};
  }
  &:focus {
    border-color: ${colors.primaryShade};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export default Input;
