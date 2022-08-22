import "./styles.css"
import React, { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

function App() {

  const placeholder = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/320px-FreeCodeCamp_logo.svg.png)
  `;

  marked.setOptions({
    breaks: true
  })

  const [markDown, setMarkdown] = useState(placeholder);

  const getMarkDown = (text) => {
    return {__html: DOMPurify.sanitize(marked.parse(text))}
  }

  return (
    <div className="App">
      <div className="row no-gutters">
        <div className="col no-gutters">
          <div className="left">
            <header className="left-header">Editor</header>
            <textarea id="editor" value={markDown} onChange={(e) => setMarkdown(e.target.value)}>
            
            </textarea>
          </div>
        </div>
        <div className="col no-gutters">
          <div className="right">
            <header className="right-header">Previewer</header>
            <div id="preview" dangerouslySetInnerHTML={getMarkDown(markDown)}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
