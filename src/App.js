import React from "react";

import Calculator from "./components/Calculator/Calculator";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Calculator />
    </div>
  );
}

export default App;
