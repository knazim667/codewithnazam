import React from "react";
import MainBanner from "../mainbanner/index";
import AboutMe from "../aboutme/index";
import Portfolio from "../portfolio/index";
import Contact from "../contact/index";

const Layout = () => {
  return (
    <div className="main">
      <MainBanner />
      <AboutMe />
      <Portfolio />
    </div>
  );
};

export default Layout;
