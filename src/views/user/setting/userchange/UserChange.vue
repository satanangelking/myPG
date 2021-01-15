<template>
  <div id="user-change">
    <UserItem
      ><img slot="limg" src="@/assets/user/userchange/账号.png" alt=""/>
      <span slot="content">用户管理</span
      ><img slot="rimg" src="@/assets/common/右箭头.png" alt=""
    /></UserItem>
    <UserItem
      ><img slot="limg" src="@/assets/user/userchange/密码.png" alt=""/>
      <span slot="content">用户管理</span
      ><img slot="rimg" src="@/assets/common/右箭头.png" alt=""
    /></UserItem>
    <UserItem
      ><img slot="limg" src="@/assets/user/userchange/简介.png" alt=""/>
      <span slot="content">用户管理</span
      ><img slot="rimg" src="@/assets/common/右箭头.png" alt=""
    /></UserItem>
  </div>
</template>
<script>
import UserItem from "@/views/user/useritem/UserItem";
export default {
  components: {
    UserItem
  }
};
</script>
