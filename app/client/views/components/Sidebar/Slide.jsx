import styled from 'styled-components';
import colors from '../../constants/colors';

const Slide = styled.div`
  flex: ${props => (props.collapsed ? '0 0 80px' : '0 0 200px')};
  transition: all 0.2s;
  position: relative;
  background: ${colors.secondary};
`;

export default Slide;
