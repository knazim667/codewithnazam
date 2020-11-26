import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import MainBanner from "./components/mainbanner";
import AboutMe from "./components/aboutme";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <Fragment>
      <Navigation />
      <div className="">
        <MainBanner />
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </Fragment>
  );
}

export default App;
