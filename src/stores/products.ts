import type { Product } from '@/model/Type'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        order: '' as string,
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
            let products = null;

            //Filter
            if(state.categoryId) {
                products = state._products.filter(p => p.categoryId === state.categoryId);    
            } else {
                products = state._products;
            }


            //Order
            if(state.order === '') {
                return products;
            }

            if(state.order === 'price') {
                return products.sort((a, b) => a.price - b.price);
            }
            
            if(state.order === 'name') {
                return products.sort((a, b) => a.name.localeCompare(b.name))
            }

            if(state.order === 'priceDesc') {
                return products.sort((a, b) => b.price - a.price);
            }
            
            if(state.order === 'nameDesc') {
                return products.sort((a, b) => b.name.localeCompare(a.name))
            }
        }
    },
    actions: {
        selectCategory(paramId: number) {
            this.categoryId = paramId;
        },
        orderByPrice() {
            this.order = 'price'
        },
        orderByName() {
            this.order = 'name'
        },
        orderByPriceDesc() {
            this.order = 'priceDesc'
        },
        orderByNameDesc() {
            this.order = 'nameDesc'
        }
    }
  })