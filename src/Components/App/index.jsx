import React from "react";
import {Button} from "react-bootstrap";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        My App
        {this.props.children}
      </div>
    );
  }
}

export default App;
