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
                    {id:1, name: 'Silla', price: 26, image: '/silla.webp'},
                    {id:2, name: 'Monitor', price: 450, image: 'https://m.media-amazon.com/images/I/711U7Cqp-LL._AC_UF894,1000_QL80_.jpg'},
                    {id:3, name: 'Mouse', price: 10, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/A_computer_mouse.jpg/800px-A_computer_mouse.jpg?20200621123504'},
                    {id:1, name: 'Silla', price: 26, },
                    {id:2, name: 'Monitor', price: 450},
                    {id:3, name: 'Mouse', price: 10}
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