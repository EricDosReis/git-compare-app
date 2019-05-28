import React, { Component } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import storage from '../../services/storage';
import http from '../../services/http';
import logo from '../../assets/logo.png';

import { Container, Form, Input } from './styles';

import CompareList from '../../components/CompareList';
import Button from '../../components/Button';

dayjs.extend(relativeTime);

export default class Main extends Component {
  state = {
    isLoading: false,
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  }

  componentDidMount() {
    this.setState({ repositories: storage.getItem('repositories') });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const { repositoryInput, repositories } = this.state;

    try {
      const repository = await http.get(`repos/${repositoryInput}`);

      repository.lastCommit = dayjs(repository.pushed_at).fromNow();

      storage.setItem('repositories', repository);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const {
      repositories, repositoryInput, repositoryError, isLoading,
    } = this.state;

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

          <Button
            label="Ok"
            isLoading={isLoading}
          />
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
