import React from "react";

const Partners = () => {
  return (
    <div className="partners flexAround p-12">
      <div className="details ">
        <img src="img/Partnerbg.png" alt="" />
        <h1>
          Our <span>Partners</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
          eiusmod.
        </p>
      </div>
      <div className="images">
        <img src="/img/7-Eleven.png" alt="" className="logos top left " />
        <img src="/img/TrueYou.png" alt="" className="logos top right" />
        <img src="/img/Makro.png" alt="" className="logos bottom left" />
        <img src="/img/CpFreshmart.png" alt="" className="logos bottom right" />
        <img src="/img/TrueCoffee.png" alt="" className="logos center" />
      </div>
    </div>
  );
};

export default Partners;
