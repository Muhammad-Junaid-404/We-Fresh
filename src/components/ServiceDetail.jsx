import React, { useState } from "react";

const ServiceDetail = () => {
  const [selectBox, setSelectBox] = useState("box1");
  const handleBtn = (button) => {
    setSelectBox(button);
  };
  return (
    <div className="serviceDetail p-12">
      <div className="serviceimg">
        <img src="/img/iPhone2.png" alt="bg" />
        <img src="/img/mobilebg2.png" alt="bg" className="mobilebg2" />
      </div>
      <div className="serviceContent">
        <div
          className={`serviceContentbox   ${
            selectBox === "box1" ? "contentboxbg" : ""
          }`}
          onClick={() => handleBtn("box1")}
        >
          <h3>Lorem ipsum dolor sit </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div
          className={`serviceContentbox   ${
            selectBox === "box2" ? "contentboxbg" : ""
          }`}
          onClick={() => handleBtn("box2")}
        >
          <h3>Adipiscing elit sed do eiusmod</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div
          className={`serviceContentbox   ${
            selectBox === "box3" ? "contentboxbg" : ""
          }`}
          onClick={() => handleBtn("box3")}
        >
          <h3>Labore et dolore magna aliqua</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
