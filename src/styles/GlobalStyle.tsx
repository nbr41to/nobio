import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: Arial, Helvetica, sans-serif;
  body {
    position: relative;
    box-sizing: border-box;
    color: #333333;
    background-color: #fff;
  }

  .box {
    border: 1px solid black;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
  }
  .flex {
    display: flex;
  }
  .column {
    flex-direction: column;
  }

`;
