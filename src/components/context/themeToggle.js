import React, { Component } from "react";
import { ThemeContext } from "./themeContext";
import { Icon } from "react-icons-kit";
import { moonO } from "react-icons-kit/fa/moonO";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button className="btn btn-primary toggle-theme" onClick={toggleTheme}>
        <Icon icon={moonO} size={20} />
      </button>
    );
  }
}

export default ThemeToggle;
