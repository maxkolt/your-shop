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
    />
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
  computed: {},
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
     this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style>

</style>