<template>
  <div id="user-change">
    <HeadBar></HeadBar>
    <UserItem
      ><img slot="limg" src="@/assets/user/userchange/账号.png" alt=""/>
      <span slot="content">账号</span>
      <input type="text" slot="input" disabled="disabled"
    /></UserItem>
    <label for="密码">
      <UserItem
        ><img slot="limg" src="@/assets/user/userchange/密码.png" alt=""/>
        <span slot="content">密码</span>
        <input type="text" slot="input" id="密码"
      /></UserItem>
    </label>

    <label for="简介">
      <UserItem
        ><img slot="limg" src="@/assets/user/userchange/简介.png" alt=""/>
        <span slot="content">简介</span
        ><input type="text" slot="input" id="简介"
      /></UserItem>
    </label>
  </div>
</template>
<script>
import UserItem from "@/views/user/useritem/UserItem";
import HeadBar from "@/components/header/HeadBar";
export default {
  components: {
    UserItem,
    HeadBar
  }
};
</script>
