<template>
  <div id="footbar">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
#footbar {
  display: flex;
  background: white;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px 0;
  box-shadow: 0 -1px 4px black;
}
</style>
