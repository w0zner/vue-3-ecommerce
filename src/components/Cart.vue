<script lang="ts">
    import type { PropType } from 'vue';
import { CartDetail } from '../model/Type';
    export default {
        props: {
            details: {
                type: Object as PropType<Array<CartDetail>>,
                required: true
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