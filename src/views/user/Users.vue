<template>
  <div id="user">
    <div class="photo">
      <UserItem>
        <img
          slot="limg"
          class="photo"
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1983364455,1831671477&fm=26&gp=0.jpg"
          alt=""
        />
        <span slot="content">satanangelking</span>
      </UserItem>
    </div>

    <UserItem
      ><img src="@/assets/user/Introduction.png" slot="limg" alt="" />
      <span slot="content">简介</span>
      <img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
    </UserItem>

    <UserItem
      ><img slot="limg" src="@/assets/user/history.png" alt=""/>
      <span slot="content">采购记录</span>
      <img slot="rimg" src="@/assets/common/右箭头.png" alt=""
    /></UserItem>

    <UserItem
      ><img slot="limg" src="@/assets/user/manager.png" alt=""/>
      <span slot="content">用户管理</span
      ><img slot="rimg" src="@/assets/common/右箭头.png" alt=""
    /></UserItem>

    <div @click="setting">
      <UserItem
        ><img slot="limg" src="@/assets/user/setting.png" alt=""/>
        <span slot="content">设置</span
        ><img slot="rimg" src="@/assets/common/右箭头.png" alt=""
      /></UserItem>
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
    setting() {
      this.$router.push("/setting");
    }
  }
};
</script>
<style lang="scss" scoped>
#user {
  .photo {
    .user-item {
      height: 70px;
    }
    img {
      width: 50px;
      height: 70px;
    }
  }
}
</style>
