<template>
  <div class="category">
    <div class="container">
      <div class="category-item-container has-scrollbar">
        <CategoryItem v-for="cat in cats" :key="cat.id" :cat="cat" />
      </div>
    </div>
  </div>
</template>
<script>
import CategoryItem from "./CategoryItem.vue";
import { useCatStore } from "@/stores/store";
import { mapWritableState } from "pinia";

export default {
  data() {
    return {
    }
  },
  components: {
    CategoryItem,
  },
  computed: {
    ...mapWritableState(useCatStore,['cats'])
  },
  created() {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((json) => (this.cats = json));
  },
};
</script>
