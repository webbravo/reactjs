import React, { Component } from "react";
import { render } from "react-dom";

class Home extends Component {
  render() {
    return <h1>Hello wolrd</h1>;
  }
}

render(<Home />, document.getElementById("container"));
