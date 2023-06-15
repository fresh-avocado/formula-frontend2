import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Visualizer from "./components/Visualizer/Visualizer";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="header">
        <h1>Visor de carreras por constructor</h1>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <Visualizer />
    </div>
  );
};

export default App;
