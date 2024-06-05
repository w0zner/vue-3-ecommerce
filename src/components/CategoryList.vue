<script lang="ts">
    import type { Category } from '@/model/Type';

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
            selectCategory(categoryId: number) {
                this.$router.push({ 
                    name: 'category', 
                    params: { categoryId } 
                })
            }   
        }
    }
</script>
<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item v-for="category in categories" :key="category.id" link @click="selectCategory(category.id)">
                <v-list-item-title>
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item color="grey-lighten-4" title="Order by price" link></v-list-item>
        </v-list>
      </v-sheet>
</template>