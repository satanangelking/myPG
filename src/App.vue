<template>
  <div id="app">
    <FootBar>
      <FootBarItem path="/purchase" activeColor="red">
        <img slot="foot-icon" src="@/assets/barrage.png" alt="" />
        <img slot="foot-icon-active" src="@/assets/barrage_fill.png" alt="" />
        <p slot="foot-desc">采购</p>
      </FootBarItem>
      <FootBarItem path="/fruits">
        <img slot="foot-icon" src="@/assets/fruits.png" alt="" />
        <img slot="foot-icon-active" src="@/assets/fruits_fill.png" alt="" />
        <p slot="foot-desc">品类</p>
      </FootBarItem>
      <FootBarItem path="/users">
        <img slot="foot-icon" src="@/assets/people.png" alt="" />
        <img slot="foot-icon-active" src="@/assets/people_fill.png" alt="" />
        <p slot="foot-desc">用户</p>
      </FootBarItem>
    </FootBar>
    <router-view></router-view>
  </div>
</template>
<script>
import FootBar from "./components/footbar/FootBar";
import FootBarItem from "./components/footbar/FootBarItem";
export default {
  components: {
    FootBar,
    FootBarItem
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
