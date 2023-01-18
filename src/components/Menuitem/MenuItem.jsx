import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux-store/CartSlice";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags, id, key }) => {
  const dispatch = useDispatch();

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
          <button
            className="cart_button"
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title,
                  tags,
                  price,
                  key,
                })
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
