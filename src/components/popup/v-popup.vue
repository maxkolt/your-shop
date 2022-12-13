<template>
  <div class="popup-wrapper" ref="popup-wrapper">
    <div class='v-popup'>
      <div class="v-popup-header">
        <span>{{ popupTitle }}</span>
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
        <button class="close-modal" @click="closePopup">Закрыть</button>
        <button
            class="submit-btn"
            @click="rightBtnAction"
        >
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    popupTitle: {
      type: String,
      default: 'Модель'
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
    rightBtnAction() {
      this.$emit('rightBtnAction')
    },
    closePopup() {
      this.$emit('closePopup')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup_wrapper']) {
        vm.closePopup()
      }
    })
  },
}
</script>

<style>
.popup-wrapper {
  background: rgba(64,64,64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  border-radius: 3px;
  padding: 16px;
  position: fixed;
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
  border: none;
  border-radius: 5px;
  padding: 8px;
  color: #ffffff;
  background: #a7c9b3;
  cursor: pointer;
}

.close-modal {
  border: none;
  border-radius: 5px;
  padding: 8px;
  color: #ffffff;
  background: #ed5454;
  cursor: pointer;
}
.material-icons {
  cursor: pointer;
}
</style>