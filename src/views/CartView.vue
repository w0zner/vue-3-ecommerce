<script lang="ts">
    import ShoppingCart from './../components/cart/ShoppingCart.vue'
    import SummaryCard from './../components/cart/SummaryCard.vue'
    export default {
        //definicion de componenetes
        components: {
            ShoppingCart,
            SummaryCard
        }
    }
</script>
<template>
    <v-row>
        <v-col cols="12" sm="8">
            <ShoppingCart />
        </v-col>
        <v-col cols="12" sm="4">
            <SummaryCard />
        </v-col>
    </v-row>
</template>
  