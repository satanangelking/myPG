<template>
  <div id="fruits-side-bar">
    <slot name="side"></slot>
  </div>
</template>
<style lang="scss" scoped>
#fruits-side-bar {
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: white;
}
</style>
