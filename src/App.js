import React, { Fragment, useContext } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Footer from "./components/Footer";
import ThemeContextProvider from "./components/context/themeContext";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <Fragment>
      <ThemeContextProvider>
        <Navigation />
        <Layout />
        <Footer />
      </ThemeContextProvider>
    </Fragment>
  );
}

export default App;
