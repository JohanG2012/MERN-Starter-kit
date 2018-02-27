import styled from 'styled-components';
import fonts from '../constants/fonts';

const Text = styled.p`
  font-family: ${fonts.primary};
  font-size: ${props => (props.small ? '12px' : '14px')};
  display: ${props => (props.inline ? 'inline' : 'block')};
  color: ${props => (props.error ? 'red' : 'rgba(0, 0, 0, 0.65)')};
`;

export default Text;
