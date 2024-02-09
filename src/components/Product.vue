<template>
  <hr />
  <div class="product-container">
    <div class="container">
      <div class="product-box">
        <div class="product-featured">
          <h2 class="title">{{ destination.title }}</h2>
          <div class="showcase-wrapper has-scrollbar">
            <div class="showcase-container">
              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    :src="destination.images[0]"
                    alt=""
                    class="showcase-img" />
                </div>

                <div class="showcase-content">
                  <a href="#">
                    <h3 class="showcase-title">{{ destination.title }}</h3>
                  </a>

                  <p class="showcase-desc">
                    {{ destination.description }}
                  </p>

                  <div class="price-box">
                    <p class="price">${{ destination.price }}</p>

                    <del>${{ destination.price + 100 }}.00</del>
                  </div>

                  <button class="add-cart-btn" @click="addToCart(destination)">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/stores/store";
import { mapState } from "pinia";
import { mapActions } from "pinia";
export default {
  computed: {
    ...mapState(useProductsStore, ["products"]),
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return this.products.find((product) => product.id === this.destinationId);
    },
  },
  methods: {
    ...mapActions(useProductsStore, ["addToCart"]),
    
  }
};
</script>

<style scoped>
.showcase-img {
  width: 300px !important;
  border-radius: 6px;
}
.product-container {
  margin-top: 30px;
}
</style>
