import React from "react";
import "./PrefCheckbox.css";

const PrefCheckbox = ({ type, checked, handleClick }) => {
  return (
    <div
      className={`pref__container ${checked ? "checked" : "unchecked"}`}
      onClick={() => handleClick(type, !checked)}
      data-testid="pref-checkbox"
    >
      {checked ? <span>✓ </span> : <span>X </span>}
      {type}
    </div>
  );
};

export default PrefCheckbox;
