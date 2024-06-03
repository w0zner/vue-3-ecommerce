import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/Type';

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    details: <Array<CartDetail>>[
      //{productId: 100, quantity: 20}
    ]
   }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;

      state.details.forEach(detail => {
        count += detail.quantity;
      });

      return count;
    },
  },
  actions: {
    addProduct(productId: number) {
      const foundDetail= this.details.find(d => d.productId === productId);
      console.log(foundDetail)

      if(foundDetail) {   
        foundDetail.quantity += 1;
      } else {
        this.details.push({productId: productId, quantity: 1})
      }
    },
  },
})
