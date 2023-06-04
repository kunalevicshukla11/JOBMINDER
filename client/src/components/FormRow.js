import React from "react";
// Reuseable input
const FormRow = ({ type, name, value, handleChange, lableText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-lable">
        {lableText || name}
      </label>
      <input
        type={type}
        
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;