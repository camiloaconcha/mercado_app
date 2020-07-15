import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Search from "./containers/search/Search";
import Detail from "./containers/products/detail";
import ProductList from "./containers/products/productList";
import "./App.scss";

const App = () => {
  return (
    <>
      <Router>
        <Route component={Search}></Route>
        <Route path="/items" exact component={ProductList} />
        <Switch>
          <Route path="/item/:itemId" exact component={Detail} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
