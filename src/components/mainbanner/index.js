import React, { useContext } from "react";
import Button from "../../Elements/Button";
import { ThemeContext } from "../context/themeContext";
import "./mainBanner.css";

const MainBanner = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="container-xl main-banner">
      <div className="content">
        <div className="col-lg-8 col-md-12 col-12">
          <h3 className="hello" style={{ color: theme.fontColor }}>
            Hello, i'm
          </h3>
          <h2 className="name" style={{ color: theme.green }}>
            Muhammad Nazam
          </h2>
          <h3 className="designation" style={{ color: theme.fontColor }}>
            Full stack developer
          </h3>
          <div className="about-me">
            <p style={{ color: theme.fontColor }}>
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
    </div>
  );
};

export default MainBanner;
