<script lang="ts">
import type { CartDetail } from '@/model/Type';
import { useCartStore } from '@/stores/cart';
import { mapActions } from 'pinia';
import type { PropType } from 'vue';

    export default {
        props: {
            detail: {
                type: Object as PropType<CartDetail>,
                required: true
            }
        },
        methods: {
            /*
            //Esto seria si no se usa mapActions de pinia
            decrementQuantity(id: number) {
                this.cartStore.decrement(id);
            },
            incrementQuantity(id: number) {
                this.cartStore.increment(id);
            },
            deleteProduct(id: number) {
                this.cartStore.deleteProduct(id);
            }
            */

            //Pinia helper para asociar funciones con actions del store
            ...mapActions(useCartStore, {
                decrementQuantity: 'decrement',
                incrementQuantity: 'increment',
                deleteProduct: 'deleteProduct'
            })
        },
        computed: {
            productImageUrl() {
                return this.detail.product.image ?? 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            },
            subTotal() {
                return this.detail.product.price * this.detail.quantity;
            }
        }
    }
</script>
<template>
    <tr>
        <td>
            <v-avatar class="mr-2">
                <v-img :src="productImageUrl" size="40"/>
            </v-avatar>
             {{ detail.product.name }}
        </td>
        <td class="text-center">
            <v-btn @click="decrementQuantity(detail.product.id)" variant="tonal" color="white" size="x-small"
                icon="mdi-minus-box" class="ml-5 mr-2" />
            {{ detail.quantity }}
            <v-btn @click="incrementQuantity(detail.product.id)" variant="tonal" color="white" size="x-small"
                icon="mdi-plus-box" class="ml-2"/>
        </td>
        <td class="text-right">
            ${{ detail.product.price }}
        </td>
        <td class="text-right">
            ${{ subTotal }}
        </td>
        <td class="text-center">
            <v-btn @click="deleteProduct(detail.product.id)" variant="tonal" color="red-lighten-4" size="x-small"
                icon="mdi-trash-can" class="ml-3" />
        </td>
    </tr>
</template>