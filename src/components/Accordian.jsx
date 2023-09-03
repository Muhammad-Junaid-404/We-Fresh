import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(1);

  const toggleAccordion = (value) => {
    setIsOpen(value);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <h3>How to get started?</h3>
        </div>

        <div className={`accordion-content  ${isOpen === 1 ? "show" : ""}`}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipis</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion(2)}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        </div>

        <div className={`accordion-content  ${isOpen === 2 ? "show" : ""}`}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipis</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion(3)}>
          <h3>Eiusmod tempor incididunt ut labore et dolore</h3>
        </div>

        <div className={`accordion-content  ${isOpen === 3 ? "show" : ""}`}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipis</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* 4 */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion(4)}>
          <h3>Quis nostrud exercitation ullamco</h3>
        </div>

        <div className={`accordion-content  ${isOpen === 4 ? "show" : ""}`}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipis</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
