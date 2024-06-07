<script lang="ts">
    import OrderOptions from '@/components/left/OrderOptions.vue'
    import CategoryOptions from '@/components/left/CategoryOptions.vue'
    import { useCategoriesStore } from '@/stores/categories';
    import { mapState } from 'pinia';

    export default {
        components: {
            OrderOptions,
            CategoryOptions
        }, 
        computed: {
            ...mapState(useCategoriesStore, ['categories'])
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
    <v-sheet rounded="lg">
        <v-list rounded="lg">

            <CategoryOptions />

            <v-divider class="my-2"></v-divider>

            <OrderOptions />

        </v-list>
      </v-sheet>
</template>