import React    from "react";
import template from "./header.jsx";

export default class header extends React.Component {
  render() {
    return template.call(this);
  }
}
