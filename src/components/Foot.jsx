import React from "react";

const Foot = () => {
  return (
    <div className="footer ">
      <div className="main p-12">
        <div className="logo">
          <img src="/img/Footerlogo.png" alt="logo" />
        </div>
        <div className="links">
          <h5>SERVICE AREA</h5>
          <p>Lorem ipsum dol </p>
          <p> Psum dolor </p>
          <p> Sum dolor </p>
          <p>Lorem ipsum</p>
        </div>
        <div className="links">
          <h5>ABOUT</h5>
          <p>Story of WeFresh </p>
          <p> Read our blog </p>
          <p> Sign up to deliver</p>
        </div>
        <div className="links">
          <h5>HELP</h5>
          <p>Help centre </p>
          <p> Read FAQs </p>
          <p>Community </p>
          <p>Security</p>
        </div>
        <div className="links">
          <p>Avaliable on</p>
          <div className="storeicons flexCenter">
            <img src="/img/Apple.png" alt="bg" />
            <img src="/img/FooterGoogle.png" alt="bg" />
          </div>
        </div>
      </div>
      <div className="copyright p-12">
        <p>© 2020 WeFresh. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Foot;
