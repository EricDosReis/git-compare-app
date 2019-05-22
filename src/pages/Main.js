import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Form = styled.div`
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

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;
