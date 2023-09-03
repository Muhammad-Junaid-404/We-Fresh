import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Search from "./components/Search";
import Partners from "./components/Partners";
import Faq from "./components/Faq";
import GetApp from "./components/GetApp";
import Contact from "./components/Contact";
import Foot from "./components/Foot";

function App() {
  return (
    <>
      {/* <div className="svgs"> */}
      <img src="/img/herobg1.png" alt="bg" className="bg1" />
      <img src="/img/herobg2.png" alt="bg" className="bg2" />
      <img src="/img/herobg3.png" alt="bg" className="bg3" />
      <img src="/img/herobg4.png" alt="bg" className="bg4" />
      <img src="/img/responsivebg.png" alt="bg" className="responsivebg" />
      {/* </div> */}
      <Header />
      <Hero />
      <Services />
      <ServiceDetail />
      <Search />
      <Partners />
      <Faq />
      <GetApp />
      <Contact />
      <Foot />
    </>
  );
}

export default App;
