import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  return (
    // Header Start
    <header>
      <nav className={"navbar navbar-expand-lg navbar-light bg-transparent"}>
        <Link className={"navbar-brand"} to="/">
          CodeWithNazam
        </Link>
        <button
          className={"navbar-toggler"}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={"navbar-toggler-icon"}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className={"nav-link"} to="/courses">
                courses <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className={"nav-item"}>
              <NavLink className={"nav-link"} to="/blogs">
                blogs
              </NavLink>
            </li>
            <li className={"nav-item"}>
              <NavLink className={"nav-link"} to="/about">
                about 
              </NavLink>
            </li>
            <li className={"nav-item"}>
              <NavLink className={"nav-link"} to="/login">
                login
              </NavLink>
            </li>
            <li className={"nav-item"}>
              <NavLink className={"nav-link"} to="/register">
                sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
