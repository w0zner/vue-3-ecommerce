<script lang="ts">
    import { useCategoriesStore } from '@/stores/categories';
    import { mapState } from 'pinia';

    export default {
        computed: {
            ...mapState(useCategoriesStore, ['categories', 'loading'])
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
            }        
        }
    }
</script>

<template>
    <v-list-subheader>Categorias</v-list-subheader>
        <v-list-item link :active="$route.name === 'home'" @click="clearCategory()">
            <v-list-item-title>
                Todos
            </v-list-item-title>
        </v-list-item>

        <v-progress-linear indeterminate v-if="loading" color="orange" />

        <v-list-item v-else v-for="category in categories" :key="category.id" link 
            :active="$route.name === 'category' && Number($route.params.categoryId) === category.id" @click="goToCategory(category.id)">
            <v-list-item-title>
                {{ category.name }}
            </v-list-item-title>
        </v-list-item>    
</template>