import React from "react";
import "./App.scss";
import Header from "./containers/header/header";
import ProductList from "./containers/products/productList";

function App() {
  return (
    <div className="App">
      <Header title="mercadolibre"></Header>
      <ProductList/>
    </div>
  );
}

export default App;
