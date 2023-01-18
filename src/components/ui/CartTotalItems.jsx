import "./CartTotalItems.css";
import { useSelector } from "react-redux";

function Total() {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="total">
      <h2 className="order__summary">ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total items in cart is {getTotal().totalQuantity} -{" "}
          <strong> ${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
}

export default Total;
