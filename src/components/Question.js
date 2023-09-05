import React, { useState } from "react";
import "../css/Question.css";

const Question = () => {
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
        <div className="faq-question">What is AITradingSpy?</div>
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
            AITradingSpy, the next revolution in financial technology. Our
            innovative platform is specifically designed to empower traders by
            providing a unique, intelligent trading co-pilot that learns and
            adapts to your trading style. AITradingSpy utilizes advanced machine
            learning algorithms to analyze patterns, strategies, and signals
            from top investors globally. It studies and interprets these
            sophisticated strategies, translating them into actionable trading
            signals and indicators specifically tailored for you. From day
            traders to long-term investors, AITradingSpy becomes your
            personalized trading assistant, providing insights you can act on,
            and an edge on the market you can count on.
          </span>
        </div>
      )}
    </div>
  );
};

export default Question;
