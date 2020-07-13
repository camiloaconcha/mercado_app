import React from "react";
import "./App.scss";
import Header from "./containers/header/header";
import ProductList from "./containers/products/productList";
import ProductDetail from "./containers/products/productDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const NoMatchRoute = () => <div>404 NOT FOUND</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="mercadolibre"></Header>
        <Switch>
          <Route path="/items">
            <ProductList />
          </Route>
          <Route path="/item/:id" exact component={ProductDetail} />
          <Route component={NoMatchRoute} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;
