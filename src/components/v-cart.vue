<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <button class="v-catalog-link-to-cart">Вернуться в каталог</button>
    </router-link>
    <h1>Корзина</h1>
    <p v-if="!cart_data.length"> Нет товаров в корзине.</p>
    <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="cart-total">
      <p class="total-counter">Общая стоимость:</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>

import vCartItem from './cart-item.vue'
import {mapActions} from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    cartTotalCost() {
      let result = []

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'DECREMENT_CART_ITEM',
      'INCREMENT_CART_ITEM'
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style>
.cart-total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 25px;
  display: flex;
  justify-content: center;
  background: #2c3e50;
  color: #ffff;
}

.total-counter {
  margin-right: 15px;
}
</style>