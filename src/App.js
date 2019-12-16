import React from "react";

import CuteDispenser from './components/CuteDispenser';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App vertical-rhythm--xl">
      <Header />
      <CuteDispenser />
    </div>
  );
}

export default App;
