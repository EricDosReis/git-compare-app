import React, { Component } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import api from '../../services/api';
import logo from '../../assets/logo.png';

import { Container, Form, Input } from './styles';

import CompareList from '../../components/CompareList';

dayjs.extend(relativeTime);

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    try {
      const res = await fetch(`${api}/repos/${repositoryInput}`);

      if (res.ok) {
        const data = await res.json();

        data.lastCommit = dayjs(data.pushed_at).fromNow();

        this.setState({
          repositoryInput: '',
          repositories: [...repositories, data],
          repositoryError: false,
        });
      } else {
        throw Error(`Request rejected with status ${res.status}`);
      }
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  }

  render() {
    const { repositories, repositoryInput, repositoryError } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <Input
            hasError={repositoryError}
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
