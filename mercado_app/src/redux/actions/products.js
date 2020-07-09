import axios from 'axios';

export function fetchProductsApi() {
  return axios
    .get('http://201.217.145.154:8070/api/products.js')
    .then(({data}) => data);
}