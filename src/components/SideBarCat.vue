<template>
  <ul class="sidebar-menu-category-list">
    <li class="sidebar-menu-category">
      <button class="sidebar-accordion-menu" data-accordion-btn>
        <div class="menu-title-flex">
          <img
            :src="cat.image"
            alt="bags"
            class="menu-title-img"
            width="20"
            height="20" />

          <p class="menu-title">{{cat.name}}</p>
        </div>

        <div>
          <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
        </div>
      </button>

      <ul class="sidebar-submenu-category-list" data-accordion>
        <li class="sidebar-submenu-category">
          <a href="#" class="sidebar-submenu-title">
            <p class="product-name">Shopping Bag</p>
            <data value="62" class="stock" title="Available Stock">62</data>
          </a>
        </li>

        <li class="sidebar-submenu-category">
          <a href="#" class="sidebar-submenu-title">
            <p class="product-name">Gym Backpack</p>
            <data value="35" class="stock" title="Available Stock">35</data>
          </a>
        </li>

        <li class="sidebar-submenu-category">
          <a href="#" class="sidebar-submenu-title">
            <p class="product-name">Purse</p>
            <data value="80" class="stock" title="Available Stock">80</data>
          </a>
        </li>

        <li class="sidebar-submenu-category">
          <a href="#" class="sidebar-submenu-title">
            <p class="product-name">Wallet</p>
            <data value="75" class="stock" title="Available Stock">75</data>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cat: Object,
  },
  methods: {
  }
};
</script>
