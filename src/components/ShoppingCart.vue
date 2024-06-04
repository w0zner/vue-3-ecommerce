<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import { mapState } from 'pinia';
    import { RouterLink } from 'vue-router';
    import  ShoppingCartItem  from  './ShoppingCartItem.vue';

    export default {
        /* Ya no recibira por props sino por store(Pinia)
        props: {
            details: {
                type: Object as PropType<Array<CartDetail>>,
                required: true
            }
        }*/

        //Accediendo al store que almacena los detalles del carrito
        components: {
            RouterLink,
            ShoppingCartItem
        },

        computed: {
            /*
            cartStore() {
                return useCartStore();
            },
            details() {
                console.log("Cart")
                console.log(this.cartStore.details)
                return this.cartStore.details;
            }
            */
           //Pinia helper para asociar estados con el store
           ...mapState(useCartStore, ['details'])
        }
    }
</script>

<template>
    <v-card>
        <v-card-text>
            <v-card-title>
                Productos agregados al carrito
            </v-card-title>

            <v-table v-if="details.length > 0">
                <thead>
                    <tr>
                        <th class="text-left">
                            Producto
                        </th>
                        <th class="text-center">
                            Cantidad
                        </th>
                        <th class="text-right">
                            Precio Unitario
                        </th>
                        <th class="text-right">
                            Subtotal
                        </th>
                        <th class="text-center">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ShoppingCartItem v-for="item in details" :key="item.product.id" :detail="item"/>
                </tbody>
            </v-table>

            <v-card-text  v-else>
                <p style="color: grey;">No hay productos en el carrito. <RouterLink style="text-decoration: none; color: orange" to="/">Volver a la tienda</RouterLink></p>
            </v-card-text>
        </v-card-text>
    </v-card>
</template>