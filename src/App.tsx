import React from "react";
import "./App.css";
import Providers from "contexts";
import Router from "./routers";
import { GlobalStyle } from "assets/styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "assets/styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Providers>
        <Router />
        <GlobalStyle />
      </Providers>
    </ThemeProvider>
  );
}

export default App;
