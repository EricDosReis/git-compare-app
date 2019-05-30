import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3.125rem;
`;

export const Repository = styled.div`
  background: #FFF;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 .625rem;
  width: 18rem;
`;

export const RepositoryHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.875rem;
`;

export const RepositoryLogo = styled.img`
  width: 4rem;
`;

export const RepositoryName = styled.strong`
  font-size: 1.5rem;
  margin-top: .625rem;
`;

export const RepositoryOwner = styled.small`
  font-size: .875rem;
  margin-top: #666;
`;

export const RepositoryInfos = styled.ul`
  list-style: none;
`;

export const RepositoryInfo = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: .75rem 1.25rem;

  small {
    color: #999;
    font-size: .875rem;
    font-style: italic;
    font-weight: normal;
  }

  &:nth-child(odd) {
    background: #F5F5F5;
  }
`;

export const RepositoryActions = styled.div`
  display: flex;

  button {
    flex-grow: 1;
  }
`;
