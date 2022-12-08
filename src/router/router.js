import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'mainPage',
    //   component: vMainPage
    // },
    {
      path: '/',
      name: 'catalog',
      component: vCatalog
    },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: vProductPage
    // },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
    }
  ]
})
 export default router