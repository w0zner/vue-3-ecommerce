<script lang="ts">
    import type { Category } from '@/model/Type';
import { useProductsStore } from '@/stores/products';
import { mapActions } from 'pinia';

    export default {
        data() {
            return {
                categories: [
                    {id: 1, name: "Oficina", description: "Productos para la oficina"},
                    {id: 2, name: "Tecnología", description: "Productos tecnológicos para el hogar"},
                    {id: 3, name: "Juguetes", description: "Juguetes para niños mayores a 3 años"}
                ] as Category[]
            };
        }, 
        methods: {
            clearCategory() {
                this.$router.push({
                    name: 'home'
                })
            },
            goToCategory(categoryId: number) {
                this.$router.push({ 
                    name: 'category', 
                    params: { categoryId } 
                })
            },
            ...mapActions(useProductsStore, ['orderByPrice', 'orderByName'])   
        }
    }
</script>
<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-subheader>Categorias</v-list-subheader>
            <v-list-item link :active="$route.name === 'home'" @click="clearCategory()">
                <v-list-item-title>
                    Todos
                </v-list-item-title>
            </v-list-item>
            <v-list-item v-for="category in categories" :key="category.id" link :active="$route.name === 'category' && Number($route.params.categoryId) === category.id" @click="goToCategory(category.id)">
                <v-list-item-title>
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>
            <v-list-subheader>Orden</v-list-subheader>
            <v-list-item title="Por precio" link @click="orderByPrice"></v-list-item>
            <v-list-item title="Por nombre" link @click="orderByName"></v-list-item>
        </v-list>
      </v-sheet>
</template>