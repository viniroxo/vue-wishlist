import api from '../utils/api';

export const getProducts = () => {
  return api
    .get(`/products`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching product data:', error);
      throw error;
    });
};
