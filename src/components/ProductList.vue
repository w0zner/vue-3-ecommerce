<script lang="ts">
    import { useProductsStore } from '@/stores/products';
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
            ...mapState(useProductsStore, ['products', 'loading'])
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
        <div class="d-flex justify-center align-center h-100" v-if="loading" > 
            <v-progress-circular indeterminate :size="72" color="orange" />
        </div>        

        <v-row v-else>
            <v-col cols="12"  v-if="products?.length === 0" >
                <v-alert border="bottom" border-color="orange" elevation="2">
                    <span class="d-flex justify-center align-center h-100" style="font-style: italic; color: lightgray; font-size: 14px;">No hay productos para esta sección.</span>
                </v-alert>
            </v-col>
            <v-col v-else v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="4">
                <ProductCard  :product="product"/>
            </v-col>
        </v-row>
        

        <!-- <Cart :details="details"/> -->

        <!-- <Book /> -->
</template>