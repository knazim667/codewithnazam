import React, { Fragment, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact";
import { ThemeContext } from "./components/context/themeContext";
import Footer from "./components/Footer";
import Layout from "./components/Layout/layout";
import Navigation from "./components/Navigation";
import ComingSoon from "./components/pages/comingSoon";

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
