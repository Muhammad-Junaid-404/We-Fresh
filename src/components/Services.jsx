import React from "react";

const Services = () => {
  return (
    <div className="services-section p-12">
      <h1>
        We’ve more <span>services</span>
      </h1>
      <div className="services flexAround">
        <div className="box">
          <div className="boximg">
            <img src="/img/Storeicon.png" alt="" />
          </div>
          <p>Store</p>
        </div>
        <div className="box">
          <div className="boximg">
            <img src="/img/Groceryicon.png" alt="" />
          </div>
          <p>Grocery</p>
        </div>
        <div className="box">
          <div className="boximg">
            <img src="/img/Cafeicon.png" alt="" />
          </div>
          <p>Cafe</p>
        </div>
        <div className="box">
          <div className="boximg">
            <img src="/img/Foodicon.png" alt="" />
          </div>
          <p>Food</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
