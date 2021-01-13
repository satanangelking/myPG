<template>
  <div id="app">
    <FootBar v-show="token">
      <FootBarItem path="/purchase" activeColor="red">
        <img slot="foot-icon" src="@/assets/app_footbar/barrage.png" alt="" />
        <img
          slot="foot-icon-active"
          src="@/assets/app_footbar/barrage_fill.png"
          alt=""
        />
        <p slot="foot-desc">采购</p>
      </FootBarItem>
      <FootBarItem path="/fruits">
        <img slot="foot-icon" src="@/assets/app_footbar/fruits.png" alt="" />
        <img
          slot="foot-icon-active"
          src="@/assets/app_footbar/fruits_fill.png"
          alt=""
        />
        <p slot="foot-desc">品类</p>
      </FootBarItem>
      <FootBarItem path="/users">
        <img slot="foot-icon" src="@/assets/app_footbar/people.png" alt="" />
        <img
          slot="foot-icon-active"
          src="@/assets/app_footbar/people_fill.png"
          alt=""
        />
        <p slot="foot-desc">用户</p>
      </FootBarItem>
    </FootBar>
    <router-view></router-view>
  </div>
</template>
<script>
import FootBar from "./components/footbar/FootBar";
import { mapState } from "vuex";
import FootBarItem from "./components/footbar/FootBarItem";
export default {
  components: {
    FootBar,
    FootBarItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["token"])
  },
  beforeCreate() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
</style>
