import React from 'react';

import GlobalStyle from './styles/global';
import UtilsStyle from './styles/utils';

import Main from './pages/Main';

const App = () => (
  <>
    <GlobalStyle />
    <UtilsStyle />

    <Main />
  </>
);

export default App;
