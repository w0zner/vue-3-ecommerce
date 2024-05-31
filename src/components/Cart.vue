<script lang="ts">
    import type { PropType } from 'vue';
    import type { CartDetail } from '../model/Type';
    import { useCartStore } from '@/stores/cart';
    export default {
        /* Ya no recibira por props sino por store(Pinia)
        props: {
            details: {
                type: Object as PropType<Array<CartDetail>>,
                required: true
            }
        }*/

        //Accediendo al store que almacena los detalles del carrito
        computed: {
            details() {
                const cartStore = useCartStore();
                return cartStore.details;
            }
        }
    }
</script>

<template>
    <v-card class="mt-4">
        <v-card-text>
            <v-card-title>
                Productos agregados al carrito
            </v-card-title>

            <v-list v-if="details.length > 0">
                <v-list-item v-for="item in details" :value="item.productId">
                    <v-list-item-title>
                        Producto: {{ item.productId }} - Cantidad: {{ item.quantity }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>

            <v-card-text  v-else="details.length==0" >
                <p style="color: grey;">No hay productos en el carrito</p>
            </v-card-text>
        </v-card-text>
    </v-card>
</template>