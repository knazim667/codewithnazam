import React from "react";

const Input = ({ name, label, type, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control my-2"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
