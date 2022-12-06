<template>
  <div class='v-catalog'>
    <h1>Catalog</h1>
    <div class="v-catalog-list">
      <catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @sendArticle="showChildArticleInConsole"
      />
    </div>
  </div>
</template>

<script>

import catalogItem from "./catalog-item.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-catalog",
  components: {
    catalogItem
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCT_FROM_API'
    ]),
    showChildArticleInConsole(data) {
      console.log(data)
    }
  },
  mounted() {
    this.'GET_PRODUCT_FROM_API'()
  }
}
</script>

<style>
.v-catalog .v-catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>