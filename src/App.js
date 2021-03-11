import React, { Fragment, useContext } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/context/themeContext";
import ThemeToggle from "./components/context/themeToggle";

import Layout from "./components/Layout/layout";

function App() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Fragment>
      <div style={{ background: theme.bg }}>
        <Navigation />
        <Layout />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
