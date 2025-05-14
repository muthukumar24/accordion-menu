import React, { useState } from "react";
import { items } from "../Data/data";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!Array.isArray(items) || items.length === 0) {
    return <div className="accordion-message">No Items Available</div>;
  }

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleClick(index)}
          >
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
