import React from "react";
import "./Textbox.scss";
import marked from "marked";

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

class Editor extends React.Component {
  render() {
    return (
      <div className="box">
        <h3 className="box-title">Editor</h3>
        <textarea
          id="editor"
          value={this.props.value}
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}

class Preview extends React.Component {
  render() {
    return (
      <div className="box">
        <h3 className="box-title">Preview</h3>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.value, {
              sanitize: true,
            }),
          }}
        ></div>
      </div>
    );
  }
}

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: defaultText };
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <Editor value={this.state.content} onChange={this.updateContent} />
        <Preview value={this.state.content} />
      </div>
    );
  }
}

const defaultText = `
### Welcome to my React Markdown Previewer! 
##### Feel free to jump straight in and delete the code and create create that README.md  content, however if you're not familiar with markdown here is a nice little guide, or for more info for the additonal features that GitHub does visit: - 
https://guides.github.com/features/mastering-markdown/#examples

### Headers:
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

### Emphasis:
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

And feel free to go crazy ~~crossing stuff out~~.

### Lists:

__Unordered__
* Item 1
* Item 2
  * Item 2a
  * Item 2b

__Ordered__
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

### Task Lists:
- [x] this is a complete item
- [ ] this is an incomplete item

### Tables:
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

### Images:
![React Logo](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)
Format: ![Alt Text](url)


### Links:
https://reactjs.org/ - automatic!
[React](https://reactjs.org/)

### Blockquotes:
As Kanye West said:
> We're living the future so
> the present is our past.

### Inline code:

\` console.log("hello") \` 

### Code block:
\`\`\`
const functionName = (name) => {
    return print("hello " + name)
}
\`\`\`
`;

export default Textbox;
