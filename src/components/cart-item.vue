<template>
  <div class="cart-item">
    <img class="v-cart-item-image" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
    <div class="cart-item-info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item-quantity">
      <p>Qty:</p>
      {{ cart_item_data.quantity }}
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods:{
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style>
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}

.v-cart-item-image {
  max-width: 50px;
}

.cart-item-quantity, .btn {
  cursor: pointer;
}

.cart-item-quantity {
  user-select: none;
}

</style>