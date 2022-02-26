import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import BackgroundParticles from "./components/background-particles";
import { client } from "./config/apollo-graphql";
import { GlobalStyles, theme } from "./config/styled-components";
import { LastScrollAndPageProvider } from "./context/lastScrollAndPageContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ApolloProvider client={client}>
          {/* Creating a context to preserve the last scroll */}
          <LastScrollAndPageProvider>
            <App />
          </LastScrollAndPageProvider>
        </ApolloProvider>
      </BrowserRouter>
      <BackgroundParticles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
