import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  align-items: ${props => (props.vertical ? 'center' : 'stretch')};
  justify-content: ${props => (props.horizontal ? 'center' : 'stretch')};
`;

export default Center;
