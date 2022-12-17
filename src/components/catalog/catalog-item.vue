<template>
  <div class="catalog-item" @click="productClick">

    <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Добавить в карзину"
        :popupTitle="product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
    >
      <img class="catalog-item-image" :src=" require('../../assets/images/' + product_data.image)" alt="img">
      <div>
        <p class="catalog-item-name">Модель: {{ product_data.name }}</p>
        <p class="catalog-item-price">Цена: {{ product_data.price | toFix }}</p>
        <p class="catalog-item-price">Категория: {{ product_data.category }}</p>
      </div>
    </v-popup>

    <img class="catalog-item-image" :src=" require('../../assets/images/' + product_data.image)" alt="img">
    <p class="catalog-item-name">Модель: {{ product_data.name }}</p>
    <p class="catalog-item-price">Цена: {{ product_data.price | toFix }}</p>
    <button
        class="catalog-item-show-info"
        @click="showPopupInfo"
    >
      Информация
    </button>
    <br>
    <button
        class="catalog-item-add-cart btn"
        @click="addToCart">
      Добавить в корзину
    </button>
  </div>
</template>

<script>

import vPopup from '../popup/v-popup.vue'
import toFix from '../../filters/toFix'

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
  filters: {
    toFix
  },
  computed: {},
  methods: {
    productClick() {
      this.$emit('productClick', this.product_data.article)
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true
    },
    closeInfoPopup() {
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
  flex-basis: 28%;
  box-shadow: 0 0 10px 0 #86b5ce;
  padding: 16px;
  margin-bottom: 27px;
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

.catalog-item-show-info {
  margin: 0 0 10px 0;
  padding: 2px;
  background: #d9e8f0;
  color: #585757;
  border: none;
  border-radius: 2px;
  font-size: 10px;
  cursor: pointer;
}
</style>