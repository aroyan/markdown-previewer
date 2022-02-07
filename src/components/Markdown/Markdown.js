import React, { Component } from 'react';
import { marked } from 'marked';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

marked.setOptions({
  breaks: true,
});

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultMarkdown,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const result = marked.parse(this.state.input);
    return (
      <div>
        <Row>
          <Col>
            <h1 style={{ color: 'mediumseagreen' }}>
              React Markdown Previewer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xl>
            <section className="editorSection">
              <h2 style={{ color: 'midnightblue' }}>Editor</h2>

              <Form.Control
                as="textarea"
                id="editor"
                placeholder="Enter your markdown here"
                onChange={this.handleChange}
                style={{ height: '80vh', resize: 'none' }}
                value={this.state.input}
              />
            </section>
          </Col>
          <Col xl>
            <section className="previewSection">
              <div>
                <h2 style={{ color: 'maroon' }}>Preview</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: result }}
                  id="preview"
                />
              </div>
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

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

![Some Random Images](https://picsum.photos/300/300)
`;

export default class Markdown extends Component {
  render() {
    return (
      <Container>
        <Editor />
      </Container>
    );
  }
}

//* Alternative I guess
// const Preview = (props) => {
//     return (
//       <div>
//         <h2>Preview</h2>
//         <div
//           dangerouslySetInnerHTML={{
//             __html: marked(props.input, { renderer: renderer }),
//           }}
//           id="preview"
//         />
//       </div>
//     );
//   };
