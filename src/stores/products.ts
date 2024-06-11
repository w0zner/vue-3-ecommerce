import type { Product } from '@/model/Type'
import { defineStore } from 'pinia'
//import data from '../data/products.json';

export const useProductsStore = defineStore('products', {
    state: () => ({
        loading: true,
        order: '' as string,
        categoryId: null as number | null,
        _products : [] as Product[]
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
        fetchProducts() {
            fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                this._products = data,
                this.loading = false
            })
        },
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