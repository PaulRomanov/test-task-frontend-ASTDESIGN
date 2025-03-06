import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ id: string; name: string; price: number }>,
  }),
  getters: {
    count: (state) => state.items.length,
  },
  actions: {
    addToCart(product: { id: string; name: string; price: number }) {
      this.items.push(product);
    },
  },
});
