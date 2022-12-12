<template>
  <div class='v-catalog'>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <button class="v-catalog-link-to-cart">Корзина: {{ CART.length }}</button>
    </router-link>
    <h1>Каталог товаров</h1>
    <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
    />
    <div class="v-catalog-list">
      <catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>

import catalogItem from "./catalog-item.vue"
import {mapActions, mapGetters} from "vuex"
import vSelect from "../v-select"


export default {
  name: "v-catalog",
  components: {
    catalogItem,
    vSelect
  },
  props: {},
  data() {
    return {
      categories: [
        {name: 'Все', value: 'ALL'},
        {name: 'Мужские', value: 'М'},
        {name: 'Женские', value: 'Ж'}
      ],
      selected: 'Все ⇓',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    sortByCategories(category) {
      this.sortedProducts = [];
      this.PRODUCTS.map(item => {
        if (item.category === category.name) {
          this.sortedProducts.push(item)
        }
        this.selected = category.name
      })
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style>
.v-catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  grid-gap: 15px;
}

.v-catalog-link-to-cart {
  position: absolute;
  top: 20px;
  right: 50px;
  padding: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #b8e0f5;
}
</style>