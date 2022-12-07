<template>
  <div class="main-wrapper">
    <v-catalog/>
    <v-cart
        v-if="CART.length"
        :cart_data="CART"

    />
  </div>
</template>

<script>

import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'
import {mapGetters} from "vuex";

export default {
  name: "main-wrapper",
  components: {
    vCatalog,
    vCart
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {
  }
}
</script>

<style>
.main-wrapper {
  max-width: 980px;
  margin: 0 auto;
}
</style>