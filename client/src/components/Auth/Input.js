import React from "react";

const Input = ({ name, handleChange, label, placeholder, autoFocus, type }) => {
  return (
    <input
      name={name}
      onChange={handleChange}
      required
      label={label}
      autoFocus={autoFocus}
      type={type}
      placeholder={placeholder}
      className="rounded m-1 p-1"
    />
  );
};

export default Input;
