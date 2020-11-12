import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Signup";
import { Title } from "./Elements/Headings.styled";
import Card from "./components/Card/Card";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <Title size={"3em"}>Hello World Starting Bloging</Title>
        <div className="container">
          <Card />
        </div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </React.Fragment>
    </Router>
  );
}

export default App;
