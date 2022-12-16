<template>
  <div class='v-header'>
    <router-link :to="{name: 'mainPage'}">
        <img src="../assets/images/unnamed.jpeg">
    </router-link>
    <div class="search-field">
      <input
          type="text"
          v-model="searchValue"
      >
      <button class="search_btn">
        <i class="material-icons" @click="search(searchValue)">search</i>
      </button>
      <button class="search_btn">
        <i class="material-icons" @click="clearSearchField">cancel</i>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-header",
  props: {},
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    },
    clearSearchField() {
      this.searchValue = ''
      this.GET_SEARCH_VALUE_TO_VUEX();
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    }
  }
}
</script>

<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8cca8c;
  padding: 16px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px 0 #4e9ac4;

  img {
    width: 50px;
  }

  .search-field {
    padding: 16px;
    position: relative;
    right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search_btn {
    margin-left: 16px;
    background: transparent;
    border: none;
  }
}
</style>
