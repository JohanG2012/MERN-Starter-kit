import styled from 'styled-components';
import colors from '../../constants/colors';

const MainMenuItem = styled.span`
  cursor: pointer;
  width: 100%;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  padding-left: ${props => (props.sidebarIsCollapsed ? 0 : '50px')};
  transition: color 0.3s;
  text-align: ${props => (props.sidebarIsCollapsed ? 'center' : 'left')};

  &:hover {
    color: ${colors.white};
  }
`;

export default MainMenuItem;
