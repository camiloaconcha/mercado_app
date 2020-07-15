import React, { useState, useEffect } from "react";
import axios from "axios";

import "./productsList.scss";
import ListItem from "./../../components/products/ListItem";
import Categories from "./../../components/categories";

const ProductList = (props) => {
  const [products, setProducts] = useState({ results: [], categories: [] });

  useEffect(() => {
    const API_BASE_URL = `http://localhost:22001/api/items`;

    const fetchResults = async () => {
      try {
        const search = await axios.get(
          `${API_BASE_URL}${props.location.search}`
        );
        setProducts(search.data);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div className="products">
      <Categories products={products} />
      <div className="products_list">
        {products.results.map((item, index) => {
          return <ListItem item={item} key={index} products={products} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
