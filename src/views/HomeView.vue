<script lang="ts">
import ProductList from '@/components/ProductList.vue';
import LeftMenu from '@/components/left/LeftMenu.vue';
import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/products';

function updateCategoryFromRouteParam(categoryIdParam: string | string []) {
    const productsStore = useProductsStore();
    const categoryId = Number(categoryIdParam);
    productsStore.selectCategory(categoryId);
}

export default {
  components: {
    ProductList,
    LeftMenu
  },
  beforeRouteEnter(to) {
    console.log('beforeRouteEnter', to.params)
    updateCategoryFromRouteParam(to.params.categoryId);
  }, 
  beforeRouteUpdate(to) {
    console.log('beforeRouteUpdate', to.params)
    updateCategoryFromRouteParam(to.params.categoryId);
  },
  mounted() {
    setTimeout(() => {
      const productsStore = useProductsStore();
      productsStore.fetchProducts();  
    }, 4000);

    setTimeout(() => {
      const categoriesStore = useCategoriesStore();
      categoriesStore.fetchCategories();
    }, 2000)
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12" sm="3" xs="3">
      <LeftMenu />
    </v-col>
    <v-col cols="12" sm="9" xs="9">
      <ProductList />
    </v-col>
  </v-row>
</template>
