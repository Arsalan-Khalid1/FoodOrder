import Modal from "../UI/Modal";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItemAddHandler = (item) => {
    CrTx.addItems({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    CrTx.removeItems(id);
  };
  const CrTx = useContext(CartContext);
  const totalAmount = `$${CrTx.totalAmount.toFixed(2)}`;
  const hasItem = CrTx.items.length < 1;
  const cartItems = (
    <ul className="cart-items">
      {CrTx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onCartHide}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        {!hasItem && <button className="button">Order</button>}
        <button className="button--alt" onClick={props.onCartHide}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
