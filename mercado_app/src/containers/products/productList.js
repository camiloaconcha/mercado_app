import React, { Component } from "react";
import "./productsList.scss";
import ListItem from "./../../components/products/ListItem";
class ProductList extends Component {
  state = {};
  render() {
    return (
      <div className='productsList'>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

export default ProductList;
