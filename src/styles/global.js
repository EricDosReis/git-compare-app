import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #9B65E6;
    font-family: sans-serif;
    font-size: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
