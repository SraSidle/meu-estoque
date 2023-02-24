import React from "react";
import "./App.css";
import Providers from "contexts";
import Router from "./routers";

function App() {
  return (
    <div className="App">
      <Providers>
        <Router />
      </Providers>
    </div>
  );
}

export default App;
