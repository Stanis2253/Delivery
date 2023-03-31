import Header from './components/Layout/Header'
import React from "react";
import Product from "./components/Products/Product";


function App() {
  return (
      <React.Fragment>
        <Header/>
        <main>
          <Product/>
        </main>
      </React.Fragment>

  );
}

export default App;
