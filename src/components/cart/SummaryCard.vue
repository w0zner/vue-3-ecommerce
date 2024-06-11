<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import { mapState } from 'pinia';

    export default {
        computed: {
            ...mapState(useCartStore, ['totalAmount', 'waLink'])
        }
    }
</script>
<template>
    <v-card>
        <v-card-title>
            Resumen de la compra
        </v-card-title>
        <v-card-subtitle>
            Total a pagar: ${{ totalAmount }}
        </v-card-subtitle>
        <v-card-text>
            <v-btn :href="waLink" target="_blank" variant="tonal" color="orange">
                Finalizar pedido
            </v-btn>
        </v-card-text>
    </v-card>
</template>