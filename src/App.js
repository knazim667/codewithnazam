import React, { Fragment, useContext } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/context/themeContext";
import ThemeToggle from "./components/context/themeToggle";
import ComingSoon from "./components/pages/comingSoon";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/layout";
import Contact from "./components/contact";

function App() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Fragment>
      <Navigation />
      <div className="main" style={{ background: theme.bg }}>
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route exact path="/blogs" component={ComingSoon} />
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
