
import axios from 'axios';

// Set the base URL for all API requests
const api = axios.create({
  baseURL: 'https://your-backend-api.com/api', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to handle API errors
const handleError = (error) => {
  if (error.response) {
    console.error('Error:', error.response.data.message || error.response.statusText);
  } else {
    console.error('Error:', error.message);
  }
  throw error;
};

// 1. Get All Products
export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. Get Product by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 3. Add Product to Cart
export const addToCart = async (productId, quantity) => {
  try {
    const response = await api.post('/cart', { productId, quantity });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 4. Get Cart Items
export const getCartItems = async () => {
  try {
    const response = await api.get('/cart');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 5. Remove Product from Cart
export const removeFromCart = async (productId) => {
  try {
    const response = await api.delete(`/cart/${productId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 6. Login User
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 7. Register User
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 8. Checkout (place order)
export const checkout = async (cartItems) => {
  try {
    const response = await api.post('/checkout', { items: cartItems });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
