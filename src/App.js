import React from 'react';
import CodeMirror from 'react-codemirror';
import logo from './logo.svg';
import './App.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

function App() {
  const codeMirrorOptions = {
    lineNumbers: true,
    mode: 'javascript'
  };
  return (
    <div className="App">

      <main>
        <CodeMirror value={"hi"} onChange={() => console.log("code change")} options={codeMirrorOptions} />
      </main>
    </div>
  );
}

export default App;
