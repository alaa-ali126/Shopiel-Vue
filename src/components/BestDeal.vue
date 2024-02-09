<template>
  <div class="showcase-container">
    <div class="showcase">
      <div class="showcase-banner">
        <img :src="product.images[0]" alt="" class="showcase-img" />
      </div>

      <div class="showcase-content">
        <RouterLink :to="'/products/' + product.id">
          <h3 class="showcase-title">{{ product.title }}</h3>
        </RouterLink>

        <p class="showcase-desc">
          {{ product.description }}
        </p>

        <div class="price-box">
          <p class="price">${{ product.price }}</p>

          <del>${{ product.price + 100 }}.00</del>
        </div>

        <button class="add-cart-btn" @click="addToCart(product)">
          add to cart
        </button>

        <div class="showcase-status">
          <div class="wrapper">
            <p>already sold: <b>20</b></p>

            <p>available: <b>40</b></p>
          </div>

          <div class="showcase-status-bar"></div>
        </div>

        <div class="countdown-box">
          <p class="countdown-desc">Hurry Up! Offer ends in:</p>

          <div class="countdown">
            <div class="countdown-content">
              <p class="display-number">360</p>

              <p class="display-text">Days</p>
            </div>

            <div class="countdown-content">
              <p class="display-number">24</p>
              <p class="display-text">Hours</p>
            </div>

            <div class="countdown-content">
              <p class="display-number">59</p>
              <p class="display-text">Min</p>
            </div>

            <div class="countdown-content">
              <p class="display-number">00</p>
              <p class="display-text">Sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/stores/store";
import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(useProductsStore, ["addToCart"]),
  },
  props: {
    product: Object,
  },
};
</script>
