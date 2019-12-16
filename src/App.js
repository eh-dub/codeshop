import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import IO from './IO/IO';
import {library as initialLibrary} from './Lib';

import { generate } from 'shortid';

function App() {

  let [library, updateLibrary] = useState(initialLibrary)

  function updateLib(fnName) {
    return (fn) => {
      const newLibrary = {...library, [fnName]: fn};
      updateLibrary(newLibrary);
    }
  }

  return (
    <div className="App">
      <main style={{display: "flex", justifyContent: "space-between", flexFlow: "column nowrap"}}>
      { Object.keys(library).map(f => {
          return (
            <IO key={f}
                func={library[f]}
                library={library}
                onChange={updateLib(f)}/>)
        })
      }
      </main>
    </div>
  );
}

export default App;
