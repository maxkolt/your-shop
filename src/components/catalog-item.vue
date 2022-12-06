<template>
  <div class="catalog-item">
    <img class="catalog-item-image" :src=" require('../assets/images/' + product_data.image)" alt="img">
    <p class="catalog-item-name">{{ product_data.name }}</p>
    <p class="catalog-item-price">Price: {{ product_data.price }}</p>
    <button
        class="catalog-item-add-cart btn"
        @click="sendDataToParent">
      Add to cart
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
    sendDataToParent() {
      this.$emit('sendArticle', this.product_data.article)
    }
  }
}
</script>

<style>
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}

.catalog-item-image {
  width: 100px;
}
</style>