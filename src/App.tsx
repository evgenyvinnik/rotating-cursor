import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CursorArea } from "./CursorArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CursorArea padding="20px">
          <img src={logo} className="App-logo" alt="logo" />
        </CursorArea>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CursorArea padding="20px">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </CursorArea>

        <CursorArea padding="50px">
          <button type="button">Click Me!</button>
        </CursorArea>

        <CursorArea padding="50px">
          <label>
            Text input: <input name="myInput" />
          </label>
        </CursorArea>
      </header>
    </div>
  );
}

export default App;
