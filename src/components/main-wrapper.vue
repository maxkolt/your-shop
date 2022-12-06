<template>
  <div class="main-wrapper">
    <v-catalog/>
    <v-cart/>
  </div>
</template>

<script>

import vCatalog from './v-catalog.vue'
import vCart from "./v-cart.vue";

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
  computed: {},
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