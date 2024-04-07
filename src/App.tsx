import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CursorArea } from "./CursorArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CursorArea name="test">
          <img src={logo} className="App-logo" alt="logo" />
        </CursorArea>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
