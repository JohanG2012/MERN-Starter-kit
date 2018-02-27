import styled from 'styled-components';

const FakeLabel = styled.label`
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 5px;
    width: 5px;
    height: 11px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transition: 0.3s ease;
    transition-delay: 0.15s;
  }
`;

export default FakeLabel;
