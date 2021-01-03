<template>
  <div id="fruits">
    <FTabbar>
      <div slot="tag" v-for="data in datalist" :key="data">{{ data }}</div>
    </FTabbar>
    <FSidebar>
      <div slot="side" v-for="data in datalist" :key="data">{{ data }}</div>
    </FSidebar>
    <div v-for="data in 40" :key="data">a</div>
  </div>
</template>
<script>
import FTabbar from "@/views/fruits/fruitsitem/tabbar";
import FSidebar from "@/views/fruits/fruitsitem/sidebar";
export default {
  data() {
    return {
      datalist: [
        "苹果",
        "梨子",
        "香蕉",
        "苹果",
        "梨子",
        "香蕉",
        "苹果",
        "梨子",
        "香蕉",
        "香蕉",
        "苹果",
        "梨子"
      ]
    };
  },
  components: {
    FTabbar,
    FSidebar
  }
};
</script>
<style lang="scss" scoped>
#fruits {
  margin: 50px 0 60px;
}
</style>
