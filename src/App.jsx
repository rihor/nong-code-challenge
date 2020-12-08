import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import { SessionContextProvider } from "./stores/Session";
import history from "./services/history";

function App() {
  return (
    <SessionContextProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </SessionContextProvider>
  );
}

export default App;
