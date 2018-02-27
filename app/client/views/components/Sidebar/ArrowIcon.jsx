import styled from 'styled-components';

const ArrowIcon = styled.i`
  transform: ${props => (props.collapsed ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.3s;
`;

export default ArrowIcon;
