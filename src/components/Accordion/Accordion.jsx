import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default Accordion;
