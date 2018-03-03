import styled from 'styled-components';
import colors from '../constants/colors';

const MenuItem = styled.li`
  padding-left: ${props => (props.mode === 'inline' ? '25px' : props.collapsed ? '0' : '48px')};
  width: 100%;
  line-height: 40px;
  height: 40px;
  background: ${props => (props.active ? colors.primary : 'inherit')};
  list-style-type: none;
  text-align: ${props => (props.collapsed ? 'center' : 'left')};
  list-style-position: inside;
  position: relative;
  color: ${props => (props.active ? colors.white : 'rgba(255, 255, 255, 0.65)')};
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: ${colors.white};
  }
`;

export default MenuItem;
