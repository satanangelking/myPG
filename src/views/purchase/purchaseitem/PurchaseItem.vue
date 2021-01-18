<template>
  <div class="purchase-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.purchase-item {
  margin-top: 10px;
  div {
    background: white;
    padding: 5px 5px;
    margin-bottom: 10px;
  }
}
</style>
