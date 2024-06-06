import type { Product } from '@/model/Type'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        categoryId: null as number | null,
        _products : [
            {id:1, name: 'Silla', price: 26, image: '/products/silla.webp', categoryId: 1},
            {id:2, name: 'Monitor', price: 450, image: '/products/monitor.jpg', categoryId: 2},
            {id:3, name: 'Mouse', price: 10, image: '/products/mouse.jpg', categoryId: 2},
            {id:4, name: 'Auricular', price: 30, image: '/products/headphones.jpg', categoryId: 2},
            {id:5, name: 'Parlante', price: 40, image: '/products/parlantes.jpg', categoryId: 2},
            {id:6, name: 'Miccrofóno', price: 15, image: '/products/microfono.jpg', categoryId: 2},
            {id:7, name: 'Organizador', price: 8, image: '/products/organizador.webp', categoryId: 1}
        ] as Product[]
    }),
    getters: {
        products(state) {
            console.log(1)
            if(!state.categoryId) {
                console.log(2)
                return state._products;
            }
            console.log(3)

            return state._products.filter(p => p.categoryId === state.categoryId);
        }
    },
    actions: {
        selectCategory(paramId: number) {
            this.categoryId = paramId;
        }
    }
  })