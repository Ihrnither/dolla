import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

import { homeData } from "../homedata";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {homeData.map((data, index) => {
        if (index === 2) {
          return [];
        } else {
          return <InfoSection {...data} />;
        }
      })}
      <Services />
      <InfoSection {...homeData[2]} />
      <Footer />
    </>
  );
};

export default Home;
