<template>
  <div class="v-popup">
    <div class="v-popup-header">
      <span>Popup name</span>
      <span>
      <i
          class="material-icons"
          @click="closePopup"
      >
        close
      </i>
    </span>
    </div>
    <div class="v-popup-content">
      <slot></slot>
    </div>
    <div class="v-popup-footer">
      <button class="close-modal" @click="closePopup">Close</button>
      <button
          class="submit-btn"
          @click="rightBtnAction"
      >
        {{ rightBtnTitle }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    popupTitle: {
      type: String,
      default: 'Popup name'
    },
    rightBtnTitle: {
      type: String,
      default: 'Ok'
    }
  },
  data() {
    return {}
  },
  methods: {
    closePopup(){
      this.$emit('closePopup')
    }
  }
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

.submit-btn {
  padding: 8px;
  color: #ffffff;
  background: #26ae68;
}

.close-modal {
  padding: 8px;
  color: #ffffff;
  background: red;
}
</style>