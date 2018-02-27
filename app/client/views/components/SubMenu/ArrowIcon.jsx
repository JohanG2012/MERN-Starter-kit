import styled from 'styled-components';

const ArrowIcon = styled.i`
  float: right;
  transform: ${props => (props.collapsed ? 'rotate(270deg)' : 'rotate(90deg)')};
  margin: 15px 20px;
  transition: transform 0.3s;
`;

export default ArrowIcon;
