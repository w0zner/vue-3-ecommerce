<script lang="ts">
    import type { PropType } from 'vue';
    import type { Product } from '../model/Type';
import { useCartStore } from '@/stores/cart';
    export default {
        props: {
            product: {
                type: Object as PropType<Product>,
                required: true
            }
        },
        //props: ['product'],
       /* data() {
           return {
                products : {name: 'silla', price: 26}
           }
        },*/
        //emits: ['addProduct'],
        methods: {
            onClickAddProduct(){
              //console.log("agregando al carrito el producto " + this.product.id)  
              //this.$emit('addProduct');
              const cartStore = useCartStore();
              cartStore.addProduct(this.product)
            }
        },
        computed: {
            productImageUrl() {
                return this.product.image ?? 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            }
        }
    }
</script>

<template>
    <v-card  variant="tonal">

        <v-img class="align-end text-white"
        height="200px"
        :src="productImageUrl"
        cover>
        <v-card-title>{{ product.name }}</v-card-title>
        </v-img>

        

        <v-card-text>
            <p class="mb-4">Esta es una descripción de ejemplo</p>
            <v-chip>$ {{product.price}}</v-chip>
        </v-card-text>
    
        <v-card-actions>
            <v-btn @click="onClickAddProduct" color="orange">
                Agregar al carrito
            </v-btn>
        </v-card-actions> 
    
    </v-card>


</template>