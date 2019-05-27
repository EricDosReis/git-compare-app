import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Repository,
  RepositoryHeader,
  RepositoryLogo,
  RepositoryName,
  RepositoryOwner,
  RepositoryInfos,
  RepositoryInfo,
} from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <RepositoryHeader>
          <RepositoryLogo
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />

          <RepositoryName>{repository.name}</RepositoryName>
          <RepositoryOwner>{repository.owner.login}</RepositoryOwner>
        </RepositoryHeader>

        <RepositoryInfos>
          <RepositoryInfo>
            {repository.stargazers_count} <small>stars</small>
          </RepositoryInfo>

          <RepositoryInfo>
            {repository.forks_count} <small>forks</small>
          </RepositoryInfo>

          <RepositoryInfo>
            {repository.open_issues_count} <small>issues</small>
          </RepositoryInfo>

          <RepositoryInfo>
            {repository.lastCommit} <small>last commit</small>
          </RepositoryInfo>
        </RepositoryInfos>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes
    .arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }))
    .isRequired,
};

export default CompareList;
