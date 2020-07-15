import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "./../../components/products/productDetail";

const Detail = ({ match }) => {
  const {
    params: { itemId },
  } = match;

  const [item, setItem] = useState({ item: {} });

  useEffect(() => {
    const API_BASE_URL = `http://localhost:22001/api/items`;
    const fetchDetail = async () => {
      try {
        const result = await axios.get(`${API_BASE_URL}/${itemId}`);
        setItem(result.data.item);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchDetail();
  }, [itemId]);

  return <>{item && <ProductDetail item={item} />}</>;
};

export default Detail;
