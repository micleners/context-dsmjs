import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 10px;
    padding: 0;
    background: #f0f6f0;
    color: #222323;
    font-family: Lato, Open-Sans, Helvetica, Sans-Serif;

    textarea {
      font-family: Lato, Open-Sans, Helvetica, Sans-Serif;
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
