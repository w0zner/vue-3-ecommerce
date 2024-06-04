<script lang="ts">
    import ShoppingCart from './../components/ShoppingCart.vue'
    export default {
        //definicion de componenetes
        components: {
            ShoppingCart
        }
    }
</script>
<template>
   
    <v-row>
        
        <v-col cols="8">
            <ShoppingCart />
        </v-col>
        <v-col cols="4">
            <v-card  title="Total a pagar" text="$100">

            </v-card>
        </v-col>
        
    </v-row>
    
</template>
  