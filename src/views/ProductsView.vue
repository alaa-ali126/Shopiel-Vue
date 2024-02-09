<template>
  <Category />
  <ProductsList all />
</template>
<script>
import Category from "@/components/Category.vue";
import ProductsList from "@/components/ProductsList.vue";
export default {
  components: {
    Category,
    ProductsList,
  },
};
</script>
