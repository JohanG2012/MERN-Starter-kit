import styled, { keyframes } from 'styled-components';
import FakeLabel from './FakeLabel';

const scaleTransform = keyframes`
  from {
    transform: scale(1, 1);
    }
  30% {
    transform: scale(1.25, 0.75);
    }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
    }
  65% {
    transform: scale(.95, 1.05);
  }
  75% {
    transform: scale(1.05, .95);
    }
  to {
    transform: scale(1, 1);
  }
`;

const Input = styled.input`
  display: hidden;

  &:checked ~ ${FakeLabel} {
    border-color transparent;
    background #6871F1;
    animation ${scaleTransform} .6s ease;

    &:after {
      opacity 1;
      transform rotate(45deg) scale(1);
    }
  }
`;

export default Input;
