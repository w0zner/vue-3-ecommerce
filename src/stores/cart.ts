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
    //doubleCount: (state) => state.count * 2,
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
