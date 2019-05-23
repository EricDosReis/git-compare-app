import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

export const Form = styled.div`
  display: flex;
  margin-top: 1.25rem;
  width: 100%;
  max-width: 25rem;

  input {
    background: #FFF;
    border: none;
    border-radius: 4px;
    color: #444;
    flex: 1;
    font-size: 1.125rem;
    height: 3rem;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }

  button {
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
  }
`;
