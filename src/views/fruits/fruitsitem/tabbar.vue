<template>
  <div id="fruits-tab-bar">
    <slot name="tag"></slot>
  </div>
</template>
<style lang="scss" scoped>
#fruits-tab-bar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  white-space: nowrap;
  overflow-x: scroll;
  padding: 10px 0 10px;
  box-shadow: 0 1px 4px black;
  z-index: 90;
  background-color: white;
  div {
    margin: 0 3px;
    padding: 3px 4px;
    border: 1px solid black;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }
}
</style>
