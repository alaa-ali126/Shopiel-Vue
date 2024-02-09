<template>
  <div class="product-container">
    <div class="container">
      <SideBar />
      <div class="product-box">
        <div class="product-main">
          <h2 class="title">Carts</h2>
          <div class="product-grid">
            <CartItem
              v-for="(cart, index) in carts"
              :cart="cart"
              :index="index"
              :key="cart.id" />
            <div v-if="carts.length == 0" class="center">
              <h2 style="text-align: center">
                there is no products you are select
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import SideBar from "./SideBar.vue";
import { useProductsStore } from "@/stores/store";
import { mapState } from "pinia";
export default {
  components: {
    CartItem,
    SideBar,
  },
  computed: {
    ...mapState(useProductsStore, ["carts"]),
  },
};
</script>
