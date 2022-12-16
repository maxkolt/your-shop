<template>
  <div class="main-wrapper">
    <v-header/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import vHeader from '../layots/v-header.vue'

export default {
  name: "main-wrapper",
  components: {
    vHeader
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