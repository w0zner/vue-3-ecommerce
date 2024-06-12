<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import { mapState } from 'pinia';

    export default {
        computed: {
            ...mapState(useCartStore, ['totalAmount', 'waLink']),
            puedeFinalizarCompra() {
                let puedeFinalizarCompra = true;
                console.log(this.totalAmount)
                if(this.totalAmount>0) {
                    puedeFinalizarCompra = false;
                }
                return puedeFinalizarCompra;
            }
        },
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

            <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn :href="waLink" target="_blank" variant="tonal" color="orange" v-bind="activatorProps" :readonly="puedeFinalizarCompra" >
                        <v-icon class="mr-2" icon="mdi-check-bold"></v-icon>
                        Finalizar pedido
                    </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card class="mx-auto" title="Pedido Enviado con éxito!"  rounded="lg" prepend-icon="mdi-bullseye-arrow">   
                        <template v-slot:append>
                            <v-icon color="orange" icon="mdi-check"></v-icon>
                        </template>
                        <v-card-text>
                            <v-spacer></v-spacer>
                            <div>Su pedido ha sido creado en una pestaña nueva, siga los pasos hasta enviarlo por Whatsapp.</div>
                            
                            <div></div>
                        </v-card-text>
                        <v-divider class="mt-2 mb-2"></v-divider>
                        <v-card-actions class="mr-1 mb-1">
                            <v-btn color="orange" text="Aceptar" @click="isActive.value = false" variant="tonal" prepend-icon="mdi-robot-happy"/>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-card-text>
    </v-card>
</template>