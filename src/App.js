import React, { Fragment, useContext } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/context/themeContext";
import ThemeToggle from "./components/context/themeToggle";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/layout";
import PageNotfound from "./components/pages/404";

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
          <Route path="*">
            <PageNotfound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
