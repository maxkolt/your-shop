<template>
  <div class="cart-item">
    <img class="v-cart-item-image" :src=" require('../../assets/images/' + cart_item_data.image)" alt="">
    <div class="cart-item-info">
      <p>Модель: {{ cart_item_data.name }}</p>
      <p>Цена: {{ cart_item_data.price | toFix }}</p>
      <p>Артикул: {{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item-quantity">
      <p>Кол-во:</p>
      <span class="quantity-tools">
        <button class="quantity-btn" @click="decrementItem">-</button>
         {{ cart_item_data.quantity }}
        <button class="quantity-btn" @click="incrementItem">+</button>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">Удалить</button>
  </div>
</template>

<script>

import toFix from "../../filters/toFix";

export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {}
  },
  filters: {
    toFix
  },
  computed: {},
  methods: {
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
}
</script>

<style>
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 #86b5ce;
  padding: 16px;
  margin-bottom: 16px;
}

.v-cart-item-image {
  max-width: 50px;
}

.cart-item-quantity, .btn {
  cursor: pointer;
}

.cart-item-quantity {
  user-select: none;
}

.quantity-btn {
  cursor: pointer;
}

</style>