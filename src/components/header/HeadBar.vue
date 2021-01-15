<template>
  <div id="head-bar">
    <HeadBarItem>
      <p>设置</p>
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
  background: white;
  margin-bottom: 10px;
  padding-top: 30px;
  box-shadow: 0 2px 2px black;
}
</style>
