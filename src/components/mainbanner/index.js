import React, { Component } from "react";
import Button from "../../Elements/Button";
import { ThemeContext } from "../context/themeContext";
import ThemeToggle from "../context/themeToggle";
import "./mainBanner.css";

class MainBanner extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="container-xl main-banner"
        style={{ background: theme.bg }}
      >
        <div className="content">
          <h3 className="hello">Hello, i'm</h3>
          <h2 className="name">Muhammad Nazam</h2>
          <h3 className="designation">Full stack developer</h3>
          <div className="about-me">
            <p>
              Crafted various website features using HTML CSS and Javascript
              Libraries. Experience with web framework using React.js ,
              React-Native , React-Redux, Bootstrap etc. Feel free to take a
              look my latest projects on the Portfolio Page. Based in Fort Mill,
              South Carolina.
            </p>
          </div>
          <Button classStyle="btn-about" title={"more about me"} />
          <ThemeToggle />
        </div>
      </div>
    );
  }
}

export default MainBanner;
