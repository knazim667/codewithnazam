import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import MainBanner from "./components/mainbanner";
import AboutMe from "./components/aboutme";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import ThemeContextProvider from "./components/context/themeContext";

function App() {
  return (
    <Fragment>
      <ThemeContextProvider>
        <Navigation />
        <div className="">
          <MainBanner />
          <AboutMe />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </ThemeContextProvider>
    </Fragment>
  );
}

export default App;
