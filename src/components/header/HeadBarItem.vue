<template>
  <div class="head-bar-item">
    <img slot="img" src="@/assets/common/返回.png" alt="" @click="back" />
    <p>
      <slot></slot>
    </p>
    <p></p>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.head-bar-item {
  margin-left: -50px;
  display: flex;
  justify-content: space-around;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
