<template>
  <div id="pwd-change">
    <HeadBar></HeadBar>
    <div class="block">
      <label for="新密码">
        <span>新密码:</span>
        <input type="text" id="新密码" @blur="tpwd()" />
      </label>
    </div>
    <div class="block">
      <label for="确认密码">
        <span>确认密码:</span>
        <input type="text" id="确认密码" @blur="trepwd()" />
      </label>
    </div>

    <button @click="commit">提交</button>
  </div>
</template>
<script>
import HeadBar from "@/components/header/HeadBar";
export default {
  components: {
    HeadBar
  },
  methods: {
    tpwd() {},
    trepwd() {},
    commit() {}
  }
};
</script>
<style lang="scss" scoped>
#pwd-change {
  display: flex;
  flex-direction: column;
  span {
    display: inline-block;
    width: 90px;
  }
  .block {
    padding: 10px 0;
    background: white;
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
    padding: 10px 0;
    background: white;
    border: none;
  }
}
</style>
