import React, { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";
import "./box.css";

const Box = ({ count, label, span }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="col-6">
      <div className="box-stats with-margin">
        <h3 className="position-relative" style={{ color: theme.green }}>
          {count}
        </h3>
        <p
          className="m-0 position-relative text-uppercase"
          style={{ color: theme.fontColor }}
        >
          {label} <span className="d-block">{span}</span>
        </p>
      </div>
    </div>
  );
};

export default Box;
