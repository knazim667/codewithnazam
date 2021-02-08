import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";

function Button({ title, classStyle, onClick }) {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <button
      className={`btn ${classStyle}`}
      onClick={onClick}
      style={{ background: theme.btnBg, border: theme.bdr }}
    >
      {title}
    </button>
  );
}
export default Button;

Button.propTypes = {
  title: PropTypes.string,
  classStyle: PropTypes.string,
};
