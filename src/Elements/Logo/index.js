import React, { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";
import "./logo.css";

const Logo = ({ label }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <h3 className="logo" style={{ color: theme.green }}>
      {label}
    </h3>
  );
};

export default Logo;
