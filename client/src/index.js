import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import Colors from "./assets/styles/colors";

// define global styles.
const GlobalStyle = createGlobalStyle`
  body,html {
    color: ${Colors.primary};
    font-family: 'Krub', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle whiteColor={false} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
