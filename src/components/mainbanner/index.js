import React, { Component } from "react";
import Button from "../../Elements/Button";
import "./mainBanner.css";

class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-xl main-banner">
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
        </div>
      </div>
    );
  }
}

export default MainBanner;
