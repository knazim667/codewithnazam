import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENU_ITEMS } from "../../data";
import Logo from "../../Elements/Logo";
import "./Navigation.css";

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  let collapse = "";

  if (mobileMenu) {
    collapse = "collapse navbar-collapse show";
  } else {
    collapse = "collapse navbar-collapse";
  }

  return (
    // Header Start
    <header className="border">
      <div className="container-xl">
        <nav className={"navbar navbar-expand-lg navbar-light bg-transparent"}>
          <NavLink className={"navbar-brand"} to="/">
            <Logo label="MN" />
          </NavLink>
          <button
            className={"navbar-toggler"}
            onClick={() => setMobileMenu(!mobileMenu)}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>

          <div className={collapse} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {MENU_ITEMS.map((item) => (
                <li key={item.label} className="nav-item">
                  <NavLink className={"nav-link"} to={item.path}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navigation;
