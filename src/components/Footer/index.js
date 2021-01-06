import React from "react";
import { NavLink } from "react-router-dom";
import { FOOTER_ITEMS } from "../../data";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer section-footer mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 m-auto text-center">
            <div className="footer-menu">
              <ul>
                {FOOTER_ITEMS.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.path}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="copyright">
              copyright @2020 by Muhammad Nazam all rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
