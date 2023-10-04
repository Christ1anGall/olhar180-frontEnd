import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Main colors */
    --color-primary: #FF5733;
    --color-secondary: #3498db;
    --color-secondary-50: #5DADE2;
    --links: #27AE60;

    /* Validation */
    --success: #4CAF50;
    --error: #E74C3C;

    /* Grey colors */
    --grey-0: #333333;
    --grey-1: #7F8C8D;
    --grey-2: #E5E5E5;

    /* Dark theme colors */
    --background: #111111;
    --text-primary: #FFFFFF;
    --text-secondary: #C7C7C7;
  }

  body {
    background-color: var(--background);
    color: var(--text-primary);

}   

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  * ::-webkit-scrollbar { 
  display: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--links);
  }

  button {
    cursor: pointer;
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: #d7d4d8 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--grey-0);
    border-radius: 0 4px 4px 0;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--grey-1);
    border-radius: 10px;
    border: 3px solid var(--grey-0);
  }
`;

export default GlobalStyle;
