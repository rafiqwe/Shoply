import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default instance;

export const getProductsDetails = async (id) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

export const getProducts = async (category) => {
  try {
    const response = await instance.get("/products", {
      params: { category },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// "electronics", "jewelery", "men's clothing", "women's clothing";
