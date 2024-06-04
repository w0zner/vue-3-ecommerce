<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import { mapActions, mapState } from 'pinia';
    import { RouterLink } from 'vue-router';

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
            RouterLink
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

            <v-list v-if="details.length > 0">
                <v-list-item v-for="item in details" :key="item.product.id">
                    <v-list-item-title>
                        <v-icon icon="mdi-package-variant-closed" />
                        Producto: {{ item.product.name }} 
                        
                        <v-btn @click="decrementQuantity(item.product.id)" variant="tonal" color="white" size="small" icon="mdi-minus-box" class="ml-5" />
                        Cantidad: {{ item.quantity }}
                        <v-btn @click="incrementQuantity(item.product.id)" variant="tonal" color="white" size="small" icon="mdi-plus-box" />
                        
                        <v-btn @click="deleteProduct(item.product.id)" variant="tonal" color="red-accent-1" size="small" icon="mdi-trash-can" class="ml-3" />
                    </v-list-item-title>
                </v-list-item>
            </v-list>

            <v-card-text  v-else>
                <p style="color: grey;">No hay productos en el carrito. <RouterLink style="text-decoration: none; color: orange" to="/">Volver a la tienda</RouterLink></p>
            </v-card-text>
        </v-card-text>
    </v-card>
</template>