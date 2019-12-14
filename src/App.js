import React from 'react';
import CodeMirror from 'react-codemirror';
import logo from './logo.svg';
import './App.css';
import P5 from './P5'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

function App() {
  const Sketch = P5();
  const codeMirrorOptions = {
    lineNumbers: true,
    mode: 'javascript'
  };
  return (
    <div className="App">

      <main style={{display: "flex", flexFlow: "row nowrap"}}>
        <div style={{width: "300px"}}>
          <CodeMirror
            value={"hi"}
            onChange={() => console.log("code change")}
            options={codeMirrorOptions}
          />
        </div>
        <div style={{width: "300px"}}>
          <Sketch
          />
        </div>
      </main>
    </div>
  );
}

export default App;
