<template>
  <div class="showcase">
    <div class="showcase-banner">
      <img
        :src="product.images[0]"
        :alt="product.description"
        width="300"
        class="product-img default" />
      <img
        :src="product.images[1]"
        :alt="product.description"
        width="300"
        class="product-img hover" />

      <div class="showcase-actions">
        <button class="btn-action" @click="addToFav(product)">
          <ion-icon name="heart-outline"></ion-icon>
        </button>

        <button class="btn-action" @click="addToCart(product)">
          <ion-icon name="bag-add-outline"></ion-icon>
        </button>
      </div>
    </div>

    <div class="showcase-content">
      <RouterLink :to="'/products/' + product.id" class="showcase-category">{{
        product.title
      }}</RouterLink>

      <RouterLink :to="'/products/' + product.id">
        <h3 class="showcase-title">{{ product.title }}</h3>
      </RouterLink>

      <div class="price-box">
        <p class="price">${{ product.price }}</p>
        <del>${{ Math.floor(product.price * 1.5) }}</del>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/stores/store";
import { mapActions } from "pinia";
export default {
  props: {
    product: Object,
  },
  methods: {
    ...mapActions(useProductsStore, ["addToCart"]),
    ...mapActions(useProductsStore, ["addToFav"]),
  },
};
</script>
