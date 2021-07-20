import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartShownHandler = () => {
    setCartShown(true);
  };

  const cartHideHandler = () => {
    setCartShown(false);
  };

  return (
    <Fragment>
      {cartShown && <Cart onCartHide={cartHideHandler} />}
      <Header onCartShown={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
