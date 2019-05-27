import styled from 'styled-components';

export const Container = styled.span`
  animation: pulse 1s ease-in-out infinite;
  border-radius: 50%;
  background-color: #FFF;
  display: block;
  height: 1.25em;
  width: 1.25em;
  outline: 1px solid transparent;

  @keyframes pulse {
    0% {
      transform: scale(0);
      opacity: .9;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
