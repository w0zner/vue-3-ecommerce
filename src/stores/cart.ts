import { defineStore } from 'pinia'
import type { Product, CartDetail } from '@/model/Type';
import  { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    details: useLocalStorage<CartDetail[]>('cartDetails', [])
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
    totalAmount: (state) => {
      let sum = 0;
      state.details.forEach(d => {
        sum += d.product.price * d.quantity;
      })

      return sum;
    },

    whatsappMessage(state) {
      let message = "Hola quiero realizar esta compra: \n\n";

      state.details.forEach(d => {
        message += `Producto: ${d.product.name} \n`;
        message += `Cantidad: ${d.quantity} \n`;
        message += `Subtotal: $${d.product.price * d.quantity} \n`
        message += '------------------------ \n';
      });

      message += `Total: $${this.totalAmount} \n\n`;
      message += `Muchas gracias!`;

      return encodeURI(message);
    },

    waLink() {
      return 'https://wa.me/595972226375?text=' + this.whatsappMessage;
    }
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
