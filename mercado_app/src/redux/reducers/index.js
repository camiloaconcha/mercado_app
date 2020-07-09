import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FILTER_PRODUCTS,
  FETCH_PRODUCTS_REQUEST,
} from "../actions/types";

const initialState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
};

export const getProducts = (state) => state.products;

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    case FILTER_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    default:
      return { ...state };
  }
}
