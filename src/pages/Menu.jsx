import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import DrinkMenu from "../home/drink-menu/DrinkMenu";
import FoodMenu from "../home/food-menu/FoodMenu";

const Menu = () => {
  return (
    <>
      <Navbar />
      <FoodMenu />
      <DrinkMenu />
      <Footer />
    </>
  );
};

export default Menu;
