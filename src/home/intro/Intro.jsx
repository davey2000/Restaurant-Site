import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import exportedImages from "../../constants/Images";
import { Link } from "react-router-dom";
import "./Intro.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        When you eat at Daves restraunt we want you to feel like family. We do
        this by providing excellent service with fine quality meals.
      </p>
      <button type="button" className="custom__button">
        <Link to="/menu">Explore Menu</Link>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={exportedImages.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
