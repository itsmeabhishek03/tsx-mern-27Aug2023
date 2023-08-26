// src/App.js

import React from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Star Wars Character App</h1>
      <CharacterList />
    </div>
  );
}

export default App;
