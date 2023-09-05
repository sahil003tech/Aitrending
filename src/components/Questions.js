import React, { useState } from "react";
import "../css/Question.css";

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-section">
      <div
        className={`faq-header ${isOpen ? "open" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="faq-question">How much does AITradingSpy cost?</div>
        <div
          className="faq-icon"
          style={{ fontSize: "40px", paddingRight: "20px" }}
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <span>
            During the Beta Phase AITradingSpy will be free to use and we only
            make money if you make money.
          </span>
        </div>
      )}
    </div>
  );
};

export default Questions;
