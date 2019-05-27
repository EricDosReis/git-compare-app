import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 1.25rem;
  max-width: 25rem;
  width: 100%;
`;

export const Input = styled.input`
  background: #FFF;
  border-radius: 4px;
  color: #444;
  flex: 1;
  font-size: 1.125rem;
  height: 3rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;

  border: ${props => (props.hasError ? '2px solid #F00' : 0)}
`;
