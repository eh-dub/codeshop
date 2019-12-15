import React from 'react';
import logo from './logo.svg';
import './App.css';

import IO from './IO/IO';

function App() {

  return (
    <div className="App">
      <main style={{display: "flex", flexFlow: "row nowrap"}}>
        <IO />
      </main>
    </div>
  );
}

export default App;
