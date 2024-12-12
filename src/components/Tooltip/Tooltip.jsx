import React from "react";
import "./Tooltip.css";

const Tooltip = ({ text, position, children }) => {
  return (
    <div className="tooltip">
      <div className="tooltip-content">{children}</div>
      <span className={`tooltip-text ${position}`}>{text}</span>
    </div>
  );
};

export default Tooltip;
