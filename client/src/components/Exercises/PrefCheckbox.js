import React from "react";
import "./PrefCheckbox.css";

const PrefCheckbox = ({ type, display, checked, handleClick }) => {
  return (
    <div
      className={`pref__container ${checked ? "checked" : "unchecked"}`}
      onClick={() => handleClick(type, !checked)}
      data-testid="pref-checkbox"
    >
      {display}
    </div>
  );
};

export default PrefCheckbox;
