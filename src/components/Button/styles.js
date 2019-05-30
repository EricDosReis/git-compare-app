import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => (props.danger ? 'transparent' : '#47C58F')};
  border: none;
  border-radius: 4px;
  color: ${props => (props.danger ? '#A55959' : '#FFF')};;
  font-size: 1.25rem;
  font-weight: bold;
  height: 3rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;

  &:hover, &:focus {
    cursor: pointer;
    opacity: .75;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
