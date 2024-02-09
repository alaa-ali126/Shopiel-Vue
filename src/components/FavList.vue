<template>
  <div class="product-container">
    <div class="container">
      <SideBar />
      <div class="product-box">
        <div class="product-main">
          <h2 class="title">Favorites ❤</h2>
          <div class="product-grid">
            <FavItem
              v-for="(fav, index) in favorite"
              :key="fav.id"
              :index="index"
              :fav="fav" />
            <div v-if="favorite.length == 0" class="center">
              <h2 style="text-align: center;">there is no products you are select</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FavItem from "./FavItem.vue";
import SideBar from "./SideBar.vue";
import { useProductsStore } from "@/stores/store";
import { mapState } from "pinia";
export default {
  components: {
    FavItem,
    SideBar,
  },
  computed: {
    ...mapState(useProductsStore, ["carts"]),
    ...mapState(useProductsStore, ["favorite"]),
  },
};
</script>
