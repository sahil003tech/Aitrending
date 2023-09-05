import React, { useState } from "react";
import "../css/Question.css";

const Questiont = () => {
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
        <div className="faq-question">
          What are the 3 parts of the AITradingSpy ecosystem?
        </div>
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
            AITradingSpy consists of 3 parts <br /> 1. Strategist Studio - Where
            you can build and deploy bots using our pre-existing tools or you
            can use our devs to create a strategy for you. <br /> 2. Trade
            Optimizer - Analyze using AI your past trades and trades of other
            and have the ability for AI to suggest improvements and enhancements
            during your trade execution. <br /> 3. Community Builder - Built for
            trading communities and leaders its a marketplace for traders to
            discover communities, vote on the ones with best performance and
            ethics and allow leaders to monetize their audience.
          </span>
        </div>
      )}
    </div>
  );
};

export default Questiont;
