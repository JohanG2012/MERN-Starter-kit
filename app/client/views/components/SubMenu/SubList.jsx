import styled, { keyframes } from 'styled-components';
import colors from '../../constants/colors';

const showAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const showAnimationCollapsed = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SubList = styled.ul`
  background: ${colors.dark};
  overflow: hidden;
  margin: 0;
  animation: ${props => (props.menuCollapsed ? showAnimationCollapsed : showAnimation)} 0.3s;
  position: ${props => (props.menuCollapsed ? 'absolute' : 'relative')};
  ${props =>
    props.menuCollapsed
      ? `
    right: -225%;
    width: 200px;
    `
      : null};
`;

export default SubList;
