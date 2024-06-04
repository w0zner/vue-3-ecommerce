import { defineStore } from 'pinia'
import type { Product, CartDetail } from '@/model/Type';

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    details: <Array<CartDetail>>[
      //{productId: 100, quantity: 20}
    ]
    //Tambien se puede definir asi details: [] as CartDetail[]
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
    addProduct(product: Product) {
      const foundDetail= this.details.find(d => d.product.id === product.id);
      console.log(foundDetail)

      if(foundDetail) {   
        foundDetail.quantity += 1;
      } else {
        this.details.push({product: product, quantity: 1})
      }
      console.log(this.details)
    },
    increment(productId: number) {
      const foundDetail= this.details.find(d => d.product.id === productId);
      if(foundDetail) {   
        foundDetail.quantity += 1;
      }
    },
    decrement(productId: number) {
      const foundDetail= this.details.find(d => d.product.id === productId);
      if(foundDetail) {   
        foundDetail.quantity -= 1;

        if(foundDetail.quantity == 0) {
          this.deleteProduct(productId);
        }
      }
    },
    deleteProduct(productId: number) {
      const index = this.details.findIndex(d => d.product.id === productId);
      
      if(index > -1) {   
        this.details.splice(index, 1);
      }  
    }
  },
})
