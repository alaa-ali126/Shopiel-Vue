<template>
  <div class="showcase">
    <div class="showcase-banner">
      <img
        :src="fav.images[0]"
        :alt="fav.description"
        width="300"
        class="product-img default" />
      <img
        :src="fav.images[1]"
        :alt="fav.description"
        width="300"
        class="product-img hover" />

      <div class="showcase-actions">
        <button class="btn-action" @click="addToCart(fav)">
          <ion-icon name="cart-outline"></ion-icon>
        </button>

        <button class="btn-action" @click="deleteFromFav(index)">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>

    <div class="showcase-content">
      <RouterLink :to="'/products/' + fav.id" class="showcase-category">{{
        fav.title
      }}</RouterLink>

      <RouterLink :to="'/products/' + fav.id">
        <h3 class="showcase-title">{{ fav.title }}</h3>
      </RouterLink>

      <div class="price-box">
        <p class="price">${{ fav.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/stores/store";
import { mapActions } from "pinia";
export default {
  props: {
    fav: Object,
    index: Number,
  },
  methods: {
    ...mapActions(useProductsStore, ["deleteFromFav"]),
    ...mapActions(useProductsStore, ["addToCart"]),
  },
};
</script>
