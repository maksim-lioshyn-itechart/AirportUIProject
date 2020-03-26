import React    from "react";
import template from "./left-sidebar.jsx";

export default class LeftSidebar extends React.Component {
  render() {
    return template.call(this);
  }
}