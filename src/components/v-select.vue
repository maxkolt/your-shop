<template>
  <div class='v-select'>
    <p
        class="title"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{ selected }}</p>
    <div
        class="options"
        v-if="areOptionsVisible"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
    }
  }
}
</script>

<style>
.v-select {
  position: relative;
  margin: 20px 0;
  width: 200px;
  cursor: pointer;
  text-align: left;
}

.title {
  border: solid 1px #a7c9b3;
  padding: 8px;
}

.v-select p {
  margin: 0;
}

.options {
  border: solid 1px #a7c9b3;
  background: #ffffff;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: 8px;
}

.options p:hover {
  background: #e7e7e7;
}
</style>