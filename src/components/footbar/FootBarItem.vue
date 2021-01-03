<template>
  <div class="foot-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="foot-icon"></slot>
    </div>
    <div v-else>
      <slot name="foot-icon-active"></slot>
    </div>
    <div :style="textStyle">
      <slot name="foot-desc"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActve: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    textStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style lang="scss" scoped>
.foot-bar-item {
  height: 40px;
  margin-bottom: 10px;
  img {
    width: 25px;
    height: 25px;
  }
  p {
    margin: 0;
  }
}
</style>
