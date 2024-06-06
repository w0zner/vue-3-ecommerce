<script lang="ts">
    import { useProductsStore } from '@/stores/products';
import type { Product } from '../model/Type';
    import ProductCard from './ProductCard.vue'
import { mapState } from 'pinia';

    export default {
        components: {
            ProductCard
        },
        mounted() {
            console.log("Hook mounted")
        },
        computed: {
            ...mapState(useProductsStore, ['products'])
        },
        methods: {
            /*listenAddProduct(product: number) {
                console.log("Producto del hijo con id " + product)

                const foundDetail= this.details.find(d => d.productId === product);
                console.log(foundDetail)

                if(foundDetail) {   
                    foundDetail.quantity += 1;
                } else {
                    this.details.push({productId: product, quantity: 1})
                }
            }*/
        }
    }
</script>

<template>
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="4" >
                <ProductCard  :product="product"/>
            </v-col>
        </v-row>
        

        <!-- <Cart :details="details"/> -->

        <!-- <Book /> -->
</template>