import React, { useState } from "react";

export default function InputForm({
  id,
  name,
  type = "text",
  value,
  isPercent = false,
  isDisabled,
  onChange,
}) {
  // console.log(value);
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={(event) => onChange(event, isPercent)}
      className={`form-control
    ${
      isDisabled
        ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
        : "bg-violet-50"
    };`}
      disabled={isDisabled}
    />
  );
}
