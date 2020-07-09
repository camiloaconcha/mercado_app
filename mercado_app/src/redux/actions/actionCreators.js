import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FILTER_PRODUCTS,
    FETCH_PRODUCTS_REQUEST,
    FILTER_CHANGED,
  } from './types';
  
  export const productsReceived = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  });
  export const productsFailed = (error) => ({type: FETCH_PRODUCTS_ERROR, error});
  export const filterProducts = (filteredProducts) => ({
    type: FILTER_PRODUCTS,
    payload: filteredProducts,
  });
  export const filterChanged = (name) => ({type: FILTER_CHANGED, name});
  export const fetchProducts = () => ({type: FETCH_PRODUCTS_REQUEST});