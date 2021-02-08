import React, { useContext } from "react";
import MainBanner from "../mainbanner/index";
import AboutMe from "../aboutme/index";
import Portfolio from "../portfolio/index";
import Contact from "../contact/index";
import { ThemeContext } from "../context/themeContext";
import ThemeToggle from "../context/themeToggle";

const Layout = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="main" style={{ background: theme.bg }}>
      <MainBanner />
      <AboutMe />
      <Portfolio />
      <Contact />
      <ThemeToggle />
    </div>
  );
};

export default Layout;
