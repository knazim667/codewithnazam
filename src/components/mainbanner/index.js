import React, { useContext } from "react";
import Button from "../../Elements/Button";
import { ThemeContext } from "../context/themeContext";
import "./mainBanner.css";
import { mainBannerImages } from "../../data";

const MainBanner = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1 className="name" style={{ color: theme.green }}>
                    Muhammad Nazam
                  </h1>
                  <h3
                    className="designation"
                    style={{ color: theme.fontColor }}
                  >
                    Full stack developer
                  </h3>
                  <div className="about-me">
                    <p style={{ color: theme.fontColor }}>
                      Crafted various website features using HTML CSS and
                      Javascript Libraries. Experience with web framework using
                      React.js , React-Native , React-Redux, Bootstrap etc. Feel
                      free to take a look my latest projects on the Portfolio
                      Page. Based in Fort Mill, South Carolina.
                    </p>
                  </div>
                  <Button classStyle="btn-about" title={"more about me"} />
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="banner-image">
                  {mainBannerImages.map((image) => (
                    <img
                      src={image.path}
                      className="wow fadeIn"
                      data-wow-delay="0.6s"
                      alt={image.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
