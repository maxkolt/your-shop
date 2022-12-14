<template>
  <div class='v-catalog'>

    <v-notification
        :messages="messages"
        :timeout="2000"
    />

    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <button class="v-catalog-link-to-cart">Корзина: {{ CART.length }}</button>
    </router-link>
    <h1>Каталог товаров</h1>
    <div class="filters">
      <v-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max="10000"
            step="100"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            max="10000"
            min="0"
            step="100"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
    <div class="v-catalog-list">
      <catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
          @productClick="productClick"
      />
    </div>
  </div>
</template>

<script>

import catalogItem from './catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'
import vSelect from '../v-select'
import vNotification from '../../notifications/v-notification'

export default {
  name: "v-catalog",
  components: {
    catalogItem,
    vSelect,
    vNotification
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
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
      messages: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'SEARCH_VALUE'
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
    productClick(article) {
      this.$router.push({name: 'product', query: {'product': article}})
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
      this.sortByCategories()
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected = category.name;
          return e.category === category.name
        })
      }
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
          .then(() => {
            let timeStamp = Date.now().toLocaleString()
            this.messages.unshift(
                {name: 'Товар добавлен в корзину', icon: 'check_circle', id: timeStamp}
            )
          })
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS]
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
  }
}
</script>

<style>
.v-catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.v-catalog-link-to-cart {
  position: absolute;
  top: 22px;
  right: 30px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #b8e0f5;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 120px;
  text-align: center;
  position: relative;
}

input[type='range'] {
  -webkit-appearance: none !important;
  background: #91bbd1;
  height: 6px;
  position: absolute;
  left: -60px;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  background: #7bad8c;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -5px;
}
</style>