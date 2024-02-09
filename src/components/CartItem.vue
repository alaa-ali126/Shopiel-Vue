<template>
  <div class="showcase">
    <div class="showcase-banner">
      <img
        :src="cart.images[0]"
        :alt="cart.description"
        width="300"
        class="product-img default" />
      <img
        :src="cart.images[1]"
        :alt="cart.description"
        width="300"
        class="product-img hover" />

      <div class="showcase-actions">
        <button class="btn-action" @click="addToFav(cart)">
          <ion-icon name="heart-outline"></ion-icon>
        </button>

        <button class="btn-action" @click="deleteFromCart(index)">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>

    <div class="showcase-content">
      <RouterLink :to="'/products/' + cart.id" class="showcase-category">{{
        cart.title
      }}</RouterLink>

      <RouterLink :to="'/products/' + cart.id">
        <h3 class="showcase-title">{{ cart.title }}</h3>
      </RouterLink>

      <div class="price-box">
        <p class="price">${{ cart.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/stores/store";
import { mapActions } from "pinia";
export default {
  props: {
    cart: Object,
    index: Number,
  },
  methods: {
    ...mapActions(useProductsStore, ["deleteFromCart"]),
    ...mapActions(useProductsStore, ["addToFav"]),
  },
};
</script>
