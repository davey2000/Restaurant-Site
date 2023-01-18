import React from "react";
import { Link } from "react-router-dom";
import SubHeading from "../../components/SubHeading/SubHeading";
import exportedImages from "../../constants/Images";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        welcome to the finest dining establishment around. here we cater to your
        every need. Our food is top notch and made in house. Always fresh never
        frozen.
      </p>
      <button type="button" className="custom__button">
        <Link to="/menu">Explore Menu</Link>
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={exportedImages.welcome} alt="header" />
    </div>
  </div>
);

export default Header;
