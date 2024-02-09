<template>
  <div class="category-item">
    <div class="category-img-box">
      <img :src="cat.image" alt="dress & frock" width="30" />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">{{ cat.name }}</h3>

        <p class="category-item-amount">({{ count }})</p>
      </div>

      <RouterLink to="/products" class="category-btn">Show all</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: "",
    };
  },
  props: {
    cat: Object,
  },
  created() {
    fetch(`https://api.escuelajs.co/api/v1/categories/${this.cat.id}/products`)
      .then((res) => res.json())
      .then((res) => (this.count = res.length));
  },
};
</script>
