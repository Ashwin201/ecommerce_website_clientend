import { apiKey, apiUrl } from "./URLs";
import axios from "axios";
const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const searchProducts = (query) =>
  axiosClient.get(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
const getLatestProducts = () => axiosClient.get(`/api/products?populate=*`);

const getLatestProductsById = (id) =>
  axiosClient.get(`/api/products?populate=*&[filters][id]=${id}`);

const getRelatedProducts = (productsId, categoryId) =>
  axiosClient.get(
    `/api/products?populate=*&[filters][id][$ne]=${productsId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

const getCategories = () => axiosClient.get(`/api/categories?populate=*`);

const getCategoriesById = (id) =>
  axiosClient.get(`/api/products?populate=*&[filters][categories][id]=${id}`);

const addToCart = (data) => axiosClient.post(`/api/carts`, data);
// api/carts?populate[products][populate][0]=img

const getUserCartItems = (email) =>
  axiosClient.get(
    `api/carts?populate[products][populate][0]=img&filters[email][$eq]=${email}`
  );
export default {
  getLatestProducts,
  getLatestProductsById,
  getCategories,
  getCategoriesById,
  searchProducts,
  addToCart,
  getUserCartItems,
  getRelatedProducts,
};
