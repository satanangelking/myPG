<template>
  <div class="purchase-item-input">
    <label :for="isId">
      <slot name="name"></slot>
      <slot name="input"></slot>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    label_name: String
  },
  computed: {
    isId() {
      return this.label_name ? this.label_name : "";
    }
  }
};
</script>
<style lang="scss" scoped>
#purchase-item-input {
  display: flex;
  align-items: center;
}
</style>
