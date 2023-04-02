import Header from './components/Layout/Header'
import React, {useState} from "react";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";


function App() {

    const [cartIsVisible, setCartIsVisible] = useState(false)

    const showCartHandler = () => {
        setCartIsVisible(true);
    }

    const hideCartHandler = () => {
        setCartIsVisible(false);
    }

  return (
      <CartContextProvider>
          {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
          <Header onShowCart={showCartHandler}/>
            <main>
              <Product/>
            </main>
      </CartContextProvider>

  );
}

export default App;
