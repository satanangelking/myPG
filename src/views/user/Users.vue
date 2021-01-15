<template>
  <div id="user">
    <UserItem>
      <img
        slot="photo"
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1983364455,1831671477&fm=26&gp=0.jpg"
        alt=""
      />
      <span slot="content">satanangelking</span>
    </UserItem>

    <UserItem
      ><img src="@/assets/user/Introduction.png" slot="img" alt="" />
      <span slot="content">简介</span></UserItem
    >

    <UserItem
      ><img slot="img" src="@/assets/user/history.png" alt="" />
      <span slot="content">采购记录</span></UserItem
    >

    <UserItem
      ><img slot="img" src="@/assets/user/manager.png" alt="" />
      <span slot="content">用户管理</span></UserItem
    >
    <div @click="setting">
      <UserItem
        ><img slot="img" src="@/assets/user/setting.png" alt="" />
        <span slot="content">设置</span></UserItem
      >
    </div>
    <div @click="quit">
      <UserItem
        ><img slot="img" src="@/assets/user/setting.png" alt="" />
        <span slot="content">退出</span></UserItem
      >
    </div>
  </div>
</template>
<script>
import UserItem from "@/views/user/useritem/UserItem";
export default {
  components: {
    UserItem
  },
  methods: {
    quit() {
      localStorage.removeItem("token");
      window.location.reload();
    },
    setting() {
      this.$router.push("/setting");
    }
  }
};
</script>
<style lang="scss" scoped>
#user {
}
</style>
