<template>
  <div class='main-page'>
    <h1>Your-shop</h1>
    <p>
      <router-link :to="{name: 'catalog'}">
        В каталог
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "main-page",
  props: {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style scoped>

</style>
