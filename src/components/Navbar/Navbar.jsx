import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="logo">Daves Restraunt</h1>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/awards">Awards</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      {/*<NavLink to='/Cart'>
      <AiOutlineShoppingCart fontSize={34} className='cart' />
  </NavLink> */}
      <NavLink to="/cart">
        <div className="shopping-cart" onClick={() => history("/cart")}>
          <AiOutlineShoppingCart fontSize={34} id="cartIcon" />
          <p>{getTotalQuantity() || 0}</p>
        </div>
      </NavLink>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="menu"
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li onClick={() => setToggleMenu(false)}>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <NavLink to="/awards">Awards</NavLink>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
