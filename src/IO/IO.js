import React, {useState} from 'react';
import CodeMirror from 'react-codemirror';
import P5 from '../P5'
import * as acorn from 'acorn';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');



// function update ({detail: sourceCode}) {
    // // Syntactic error handling
    // try {
    //   const AST = acorn.parse(sourceCode);
    //   console.log(AST);
    //   runtime.update(rt => {
    //     return Object.assign(rt, {[name]: sourceCode})
    //   });
    // } catch (e) {
    //   console.error(e);
    //   return;
    // }
  //   const library = Object.keys($runtime).reduce((acc, fName)  => {
  //     const functionObj = (new Function(`return ${$runtime[fName]}`))();
  //     acc[fName] = functionObj;
  //     return acc;
  //   }, {});
  //   const closure = new Function (
  //     `return function(lib) {
  //       return ${sourceCode}
  //     }`
  //   )();
  //   sketch = closure(library);
  // }

// sketch 1
const s1 = ( p ) => {

  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(127);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.fill(255, 127, 0);
    p.rect(x,y,50,50);
  };
};

function IO() {
  const Sketch = P5();
  const codeMirrorOptions = {
    lineNumbers: true,
    mode: 'javascript'
  };

  const [sketch, updateSketch] = useState(new Function (
      `return ${s1.toString()};`
  ));

  function buildScript(sourceCode) {
    // Syntactic error handling
    try {
      const AST = acorn.parse(sourceCode);
      console.log(AST);
      // runtime.update(rt => {
      //   return Object.assign(rt, {[name]: sourceCode})
      // });
    } catch (e) {
      console.error(e);
      return;
    }

      const sketchFn = new Function (
          `return ${sourceCode};`
      );
      updateSketch(sketchFn);
  }
  return (
    <div style={{display: "flex", flexFlow: "row nowrap"}}>
      <div style={{width: "300px"}}>
        <CodeMirror
          value={s1.toString()}
          onChange={buildScript}
          options={codeMirrorOptions}
        />
      </div>
      <div style={{width: "300px"}}>
        <Sketch sketch={sketch}
        />
      </div>
    </div>
  );
}

export default IO;
