import React from "react";
import { createGlobalStyle } from "styled-components";
import Landing from "./components/landing";
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
const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle whiteColor={false} />
      <Landing />
    </React.Fragment>
  );
};

export default App;
