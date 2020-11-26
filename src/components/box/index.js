import React from "react";
import "./box.css";

const Box = ({ count, label, span }) => {
  return (
    <div className="col-6">
      <div className="box-stats with-margin">
        <h3 className="position-relative">{count}</h3>
        <p className="m-0 position-relative text-uppercase">
          {label} <span className="d-block">{span}</span>
        </p>
      </div>
    </div>
  );
};

export default Box;
