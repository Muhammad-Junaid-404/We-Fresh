import React, { useState } from "react";
import Accordion from "./Accordian";

const accordionItems = [
  {
    id: 1,
    title: "How to get started?",
    heading: "Lorem ipsum dolor sit amet, consectetur adipis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    heading: "Lorem ipsum dolor sit amet, consectetur adipis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 3,
    title: "Eiusmod tempor incididunt ut labore et dolore",
    heading: "Lorem ipsum dolor sit amet, consectetur adipis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 4,
    title: "Quis nostrud exercitation ullamco",
    heading: "Lorem ipsum dolor sit amet, consectetur adipis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

const Faq = () => {
  return (
    <>
      <div className="faq flexCenter p-12">
        <h1>Got questions?</h1>
        <p>Perfect, we’ve got answers!</p>

        <Accordion />
        {/* {accordionItems.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            heading={item.heading}
            text={item.text}
          />
        ))} */}

        {/* contact  */}
        <div className="contact">
          <h1>Still have a question?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="contactboxes flexCenter">
            <div className="box flexCenter">
              <h5>+66 8959888</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="box flexCenter">
              <h5>Support@service.com</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
