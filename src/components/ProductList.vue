<script lang="ts">
    import type { Product } from '../model/Type';
    import ProductCard from './ProductCard.vue'

    export default {
        components: {
            ProductCard
        },
        data() {
           return {
                products : [
                    {id:1, name: 'Silla', price: 26, image: '/products/silla.webp', categoryId: 1},
                    {id:2, name: 'Monitor', price: 450, image: '/products/monitor.jpg', categoryId: 2},
                    {id:3, name: 'Mouse', price: 10, image: '/products/mouse.jpg', categoryId: 2},
                    {id:4, name: 'Auricular', price: 30, image: '/products/headphones.jpg', categoryId: 2},
                    {id:5, name: 'Parlante', price: 40, image: '/products/parlantes.jpg', categoryId: 2},
                    {id:6, name: 'Miccrofóno', price: 15, image: '/products/microfono.jpg', categoryId: 2},
                    {id:7, name: 'Organizador', price: 8, image: '/products/organizador.webp', categoryId: 1}
                ] as Product[]
            }
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