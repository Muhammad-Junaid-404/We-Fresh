import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      {menu && (
        <header className="flexBetween  p-12">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <nav>
            <ul className="flexBetween">
              <li>Our App</li>
              <li>For Business</li>
              <li>About us</li>
              <li>English</li>
            </ul>
            <i
              className="fa-solid fa-bars menubtn"
              onClick={() => setMenu(false)}
            ></i>
          </nav>
        </header>
      )}

      {!menu && (
        <div className="header">
          <div className="head flexBetween">
            <img src="/img/logo.png" alt="logo" />
            <i
              className="fa-solid fa-xmark menubtn"
              onClick={() => setMenu(true)}
            ></i>
          </div>
          <div className="body">
            {/* <ul> */}
            <li>Our App</li>
            <li>For Business</li>
            <li>About us</li>
            <li>English</li>
            {/* </ul> */}
            <button>Sign up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
