import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from '../components/catalog/v-catalog.vue'
import vCart from '../components/cart/v-cart.vue'
import mainPage from '../main-page/main-page.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: vCatalog
    },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: vProductPage
    //  },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
    }
  ]
})
export default router