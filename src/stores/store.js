import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    carts: [],
    favorite: [],
  }),
  actions: {
    addToCart(product) {
      this.carts.push(product);
    },
    deleteFromCart(index) {
      this.carts.splice(index, 1);
    },
    deleteFromFav(index) {
      this.favorite.splice(index, 1);
    },
    addToFav(product) {
      this.favorite.push(product);
    },
  },
  persist: true,
});

export const useCatStore = defineStore("category", {
  state: () => ({
    cats: [],
  }),
});
