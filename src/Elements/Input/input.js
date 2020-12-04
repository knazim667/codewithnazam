import React from "react";
import "./input.css";

const Input = ({ name, label, type, value, onChange, error, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
