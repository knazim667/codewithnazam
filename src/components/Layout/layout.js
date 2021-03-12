import React from "react";
import MainBanner from "../mainbanner/index";
import AboutMe from "../aboutme/index";
import Portfolio from "../portfolio/index";

const Layout = () => {
  return (
    <div>
      <MainBanner />
      <AboutMe />
      <Portfolio />
    </div>
  );
};

export default Layout;
