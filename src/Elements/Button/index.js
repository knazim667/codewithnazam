import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({ title, classStyle, onClick }) {
  return (
    <button className={`btn ${classStyle}`} btn-about onClick={onClick}>
      {title}
    </button>
  );
}
export default Button;

Button.propTypes = {
  title: PropTypes.string,
  classStyle: PropTypes.string,
};
