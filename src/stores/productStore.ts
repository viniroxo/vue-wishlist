import { defineStore } from 'pinia';
import type { Product } from '../interfaces';
import { getProducts } from '../service/productService';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as Product[],
    wishlist: [] as string[],
  }),
  actions: {
    async fetchProducts() {
      try {
        const data = await getProducts();
        this.products = data;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },

    toggleWishlist(productCode: string) {
      const index = this.wishlist.indexOf(productCode);
      if (index !== -1) {
        this.wishlist.splice(index, 1);
      } else {
        this.wishlist.push(productCode);
      }
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    },

    loadWishlist() {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        this.wishlist = JSON.parse(savedWishlist);
      }
    },

    isInWishlist(productCode: string): boolean {
      return this.wishlist.includes(productCode);
    },
  },
});
