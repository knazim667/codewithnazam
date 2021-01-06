import React, { Component } from "react";
import { ThemeContext } from "./themeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button className="btn btn-primary" onClick={toggleTheme}>
        Theme Toggle
      </button>
    );
  }
}

export default ThemeToggle;
