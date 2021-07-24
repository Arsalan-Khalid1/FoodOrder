import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const CrTx = useContext(CartContext);
  const { items } = CrTx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    } else {
      setBtnIsHighlighted(true);
      setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);
    }
  }, [items]);

  const btnClasses = `button ${btnIsHighlighted ? `bump` : ``}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
