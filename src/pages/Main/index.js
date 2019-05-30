import React, { Component } from 'react';

import storage from '../../services/storage';
import http from '../../services/http';
import logo from '../../assets/logo.png';
import { dateFromNow } from '../../formatters/date';

import { Container, Form, Input } from './styles';

import CompareList from '../../components/CompareList';
import Button from '../../components/Button';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
    disabled: false,
  }

  componentDidMount() {
    this.setState({ repositories: storage.getAll('repositories') });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true, disabled: true });

    const { repositoryInput, repositories } = this.state;

    try {
      const repository = await http.get(`repos/${repositoryInput}`);

      repository.lastCommit = dateFromNow(repository.pushed_at);
      storage.add('repositories', repository);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false, disabled: false });
    }
  }

  handleRemoveRepository = (id) => {
    const { repositories } = this.state;
    const updatedRepositories = repositories.filter(repository => repository.id !== id);

    this.setState({
      repositories: [...updatedRepositories],
      repositoryError: false,
    });

    storage.update('repositories', updatedRepositories);
    this.setState({ loading: false });
  }

  handleUpdateRepository = async (owner, name) => {
    const { repositories } = this.state;

    try {
      const repository = await http.get(`repos/${owner}/${name}`);
      const repositoryIndex = repositories.findIndex(({ id }) => repository.id === id);

      repository.lastCommit = dateFromNow(repository.pushed_at);
      repositories[repositoryIndex] = repository;

      storage.update('repositories', repositories);

      this.setState({
        repositories: [...repositories],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading, disabled,
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
            className="ml-1"
            loading={loading}
            disabled={disabled}
            submit
          />
        </Form>

        <CompareList
          repositories={repositories}
          handleRemoveRepository={this.handleRemoveRepository}
          handleUpdateRepository={this.handleUpdateRepository}
        />
      </Container>
    );
  }
}
