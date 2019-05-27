import styled from 'styled-components';

export const Container = styled.button`
  background: #47C58F;
  border: none;
  border-radius: 4px;
  color: #FFF;
  font-size: 1.25rem;
  font-weight: bold;
  height: 3rem;
  margin-left: .75rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;

  &:hover, &:focus {
    background: #85E8BE;
    cursor: pointer;
  }
`;
