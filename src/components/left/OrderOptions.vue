<script lang="ts">
    import { useProductsStore } from '@/stores/products';
    import { mapActions, mapState } from 'pinia';

    export default {
        methods: {
            ...mapActions(useProductsStore, ['orderByPrice', 'orderByName', 'orderByPriceDesc', 'orderByNameDesc'])   
        },
        computed: {
            ...mapState(useProductsStore, ['order'])
        }
    }
</script>

<template>
    <v-list-subheader>Ordenar Por</v-list-subheader>
    <v-list-item title="Precio - a +" link @click="orderByPrice" :active="order === 'price'"></v-list-item>
    <v-list-item title="Precio + a -" link @click="orderByPriceDesc" :active="order === 'priceDesc'"></v-list-item>
    <v-list-item title="Nombre A-Z" link @click="orderByName" :active="order === 'name'"></v-list-item>
    <v-list-item title="Nombre Z-A" link @click="orderByNameDesc" :active="order === 'nameDesc'"></v-list-item>
</template>