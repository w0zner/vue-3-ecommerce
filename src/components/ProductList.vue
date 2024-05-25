<script lang="ts">
    import type { CartDetail, Product } from '../model/Type';
    import ProductCard from './ProductCard.vue'
    import Cart from './Cart.vue'

    export default {
        components: {
            ProductCard,
            Cart
        },
        data() {
           return {
                products : <Array<Product>>[
                    {id:1, name: 'Silla', price: 26},
                    {id:2, name: 'Monitor', price: 450},
                    {id:3, name: 'Mouse', price: 10}
                ],

                details: <Array<CartDetail>>[]
            }
        },
        methods: {
            listenAddProduct(product: number) {
                console.log("Producto del hijo con id " + product)

                const foundDetail= this.details.find(d => d.productId === product);
                console.log(foundDetail)

                if(foundDetail) {   
                    foundDetail.quantity += 1;
                } else {
                    this.details.push({productId: product, quantity: 1})
                }
            }
        }
    }
</script>

<template>
        <v-row>
            <v-col v-for="product in products" cols="4" >
                <ProductCard  :product="product" @addProduct="listenAddProduct(product.id)"/>
            </v-col>
        </v-row>
        

        <Cart :details="details"/>
</template>