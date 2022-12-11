import Vue from 'vue'
import Vuex from 'vuex'
import commonActions from "./actions/actions";
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";
import apiRequests from "@/vuex/actions/api-requests";

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters
});

export default store;