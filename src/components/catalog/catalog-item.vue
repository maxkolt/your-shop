<template>
  <div class="catalog-item">

    <v-popup
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"
    />

    <img class="catalog-item-image" :src=" require('../../assets/images/' + product_data.image)" alt="img">
    <p class="catalog-item-name">{{ product_data.name }}</p>
    <p class="catalog-item-price">Price: {{ product_data.price }}</p>
    <button
        class="catalog-item-show-info"
        @click="showPopupInfo"
    >
      Информация
    </button>
    <button
        class="catalog-item-add-cart btn"
        @click="addToCart">
      Добавить в корзину
    </button>
  </div>
</template>

<script>

import vPopup from '../popup/v-popup.vue'

export default {
  name: "catalog-item",
  components: {
    vPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  computed: {},
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false
    },
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1)
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
  background: #a7c9b3;
  color: #ffff;
  border: none;
  border-radius: 5px;
}
</style>