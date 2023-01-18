import React from "react";
import CartItem from "../components/ui/CartItem";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import CartTotalItems from "../components/ui/CartTotalItems";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cart__left">
          <div>
            <h3>Your Shopping Cart</h3>
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                tags={item.tags}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <div className="cart__right">
          <CartTotalItems />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
