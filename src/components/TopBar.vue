<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import { RouterLink } from 'vue-router';

    export default {
        components: {
            RouterLink
        },
        computed: {
            itemsCount() {
                const cartStore = useCartStore();
                return cartStore.cartItemsCount;
            }
        }
    }
</script>
<template>
    <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-avatar class="me-4 " size="32">
                <v-img src="/logo.jpg"></v-img>
            </v-avatar>

            <RouterLink to="/" custom v-slot="{ navigate }">
                <v-btn :active="$route.name === 'home' || $route.name === 'category'" variant="text" @click="navigate">
                    <v-icon class="mr-0 mr-sm-2" icon="mdi-home"></v-icon>
                    <span class="d-none d-sm-flex">Home</span>
                </v-btn>
            </RouterLink>

            <RouterLink to="/cart" custom v-slot="{ navigate }">
                <v-badge color="orange" :content="itemsCount" :model-value="itemsCount > 0">
                    <v-btn :active="$route.name === 'cart'" variant="text" @click="navigate">
                        <v-icon class="mr-0 mr-sm-2" icon="mdi-cart"></v-icon>
                        <span class="d-none d-sm-flex">Cart</span>
                    </v-btn>
                </v-badge>
            </RouterLink>

            <RouterLink to="/about" custom v-slot="{ navigate }">
                <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
                    <v-icon class="mr-0 mr-sm-2" icon="mdi-information"></v-icon>
                    <span class="d-none d-sm-flex">About</span>
                </v-btn>
            </RouterLink>

            <v-spacer></v-spacer>

            <v-responsive max-width="160">
                <v-text-field density="compact" label="Search" rounded="lg" variant="solo-filled" flat hide-details
                    single-line></v-text-field>
            </v-responsive>
        </v-container>
    </v-app-bar>
</template>