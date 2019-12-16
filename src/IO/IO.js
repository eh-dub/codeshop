import React, {useState} from 'react';
import CodeMirror from 'react-codemirror';
import P5 from '../P5'
import * as acorn from 'acorn';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

function IO({ func = () => {}
            , library = {}
            , onChange = () => {}}) {
  const Sketch = P5();
  const codeMirrorOptions = {
    lineNumbers: true,
    mode: 'javascript'
  };

  function buildScript(sourceCode) {
    // Syntactic error handling
    try {
      const AST = acorn.parse(sourceCode);
      console.log(AST);

    } catch (e) {
      console.error(e);
      return;
    }


    try {
      const closure = new Function (
        `return function(lib) {
          return ${sourceCode}
        }`
      )();
      const sketchFn = closure(library);
      onChange(sketchFn);

    } catch(e) {
      console.error(e)
      return;
    }

  }

  return (
    <div style={
      { display: "flex"
      , flexFlow: "row nowrap"
      , justifyContent: "space-between"}
    }>
      <div style={{width: "300px"}}>
        <CodeMirror
          value={func.toString()}
          onChange={buildScript}
          options={codeMirrorOptions}
        />
      </div>
      <div style={{width: "300px"}}>
        <Sketch sketch={func}
        />
      </div>
    </div>
  );
}

export default IO;
