import React from "react";
import './Navigation.css';

function Navigation() {
  return (
    // Header Start
    <header>
      {/* Navbar  */}
      <nav className={"navbar navbar-expand-lg navbar-light bg-transparent"}>
        <a className={"navbar-brand"} href="#">
          CodeWithNazam
        </a>
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
              <a className={"nav-link"} href="#">
                courses <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#">
                blogs
              </a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#">
                about 
              </a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#">
                login
              </a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#">
                sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
