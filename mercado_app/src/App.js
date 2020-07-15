import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Search from "./containers/search/Search";
import ProductList from "./containers/products/productList";
import ProductDetail from "./containers/products/productDetail";

const NotFound = () => <div>404 NOT FOUND</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Search />
          </Route>
          <Route path="/items">
            <ProductList />
          </Route>
          <Route path="/item/:id" exact component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
