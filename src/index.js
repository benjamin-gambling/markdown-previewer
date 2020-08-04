import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Background from "./Background";
import Textbox from "./Textbox";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        by <a href="https://github.com/benjamin-gambling">benjamin gambling</a>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Textbox />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
