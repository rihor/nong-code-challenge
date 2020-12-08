import React from "react";
import { Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes";
import { SessionContextProvider } from "./stores/Session";
import history from "./services/history";

function App() {
  return (
    <>
      <GlobalStyle />
      <SessionContextProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </SessionContextProvider>
    </>
  );
}

export default App;
