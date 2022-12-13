<template>
<div class="v-popup">
  <div class="v-popup-header">
    <span>Popup name</span>
    <span>
      <i class="material-icons">close</i>
    </span>
  </div>
  <div class="v-popup-content">
    <slot></slot>
  </div>
  <div class="v-popup-footer"></div>
</div>
</template>

<script>
export default {
  name: "v-popup"
}
</script>

<style>
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}
.v-popup-header, .v-popup-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-popup-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>