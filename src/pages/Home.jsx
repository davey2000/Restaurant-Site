import React from "react";
import AboutUs from "../home/about-us/AboutUs";
import Header from "../home/header/Header";
import DrinkMenu from "../home/drink-menu/DrinkMenu";
import Chef from "../home/chef/Chef";
import Intro from "../home/intro/Intro";
import Laurels from "../home/laurels/Laurels";
import Gallery from "../home/gallery/Gallery";
import FindUs from "../home/find-us/FindUs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <DrinkMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default Home;
