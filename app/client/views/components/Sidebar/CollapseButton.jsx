import styled from 'styled-components';
import colors from '../../constants/colors';

const CollapseButton = styled.div`
  height: 50px;
  width: 100%;
  background: ${colors.secondaryShade};
  line-height: 50px;
  color: ${colors.gray};
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export default CollapseButton;
