<template>
  <div id="head-bar">
    <HeadBarItem>
      <span>设置</span>
    </HeadBarItem>
  </div>
</template>
<script>
import HeadBarItem from "@/components/header/HeadBarItem";
export default {
  components: {
    HeadBarItem
  }
};
</script>
<style lang="scss" scoped>
#head-bar {
  padding-bottom: 10px;
  box-shadow: 0 2px 2px black;
}
</style>
