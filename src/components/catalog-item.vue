<template>
  <div class="catalog-item">
    <img class="catalog-item-image" :src=" require('../assets/images/' + product_data.image)" alt="img">
    <p class="catalog-item-name">{{ product_data.name }}</p>
    <p class="catalog-item-price">Price: {{ product_data.price }}</p>
    <button
        class="catalog-item-add-cart btn"
        @click="addToCart">
      Добавить в корзину
    </button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style>
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 10px 0 #86b5ce;
  padding: 16px;
  margin-bottom: 16px;
}

.catalog-item-image {
  width: 100px;
}

.btn {
  padding: 10px;
  background: #cabbb4;
  color: #ffff;
  border: none;
  border-radius: 5px;
}
</style>