import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Signup";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <h1>Hello World Starting Bloging</h1>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register"  component={Register}/>
      </React.Fragment>
    </Router>
  );
}

export default App;
