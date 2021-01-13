<template>
  <div id="user">
    <UserItem>
      <img
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1983364455,1831671477&fm=26&gp=0.jpg"
        slot="head_photo"
        alt=""
      />
      <span slot="name">satanangelking</span>
      <img src="@/assets/user/Introduction.png" slot="I_icon" alt="" />
      <span slot="introduce">简介</span>
      <img src="@/assets/user/history.png" slot="H_icon" alt="" />
      <span slot="history_purchase">采购记录</span>
      <img src="@/assets/user/manager.png" slot="M_icon" alt="" />
      <span slot="user_management">用户管理</span>
      <img src="@/assets/user/setting.png" slot="S_icon" alt="" />
      <span slot="setting">设置</span>
    </UserItem>
  </div>
</template>
<script>
import UserItem from "@/views/user/useritem/UserItem";
export default {
  components: {
    UserItem
  },
  mounted() {}
  //   this.$api.post(
  //     "user.do",
  //     {
  //       "": ""
  //     },
  //     response => {
  //       if (response.status >= 200 && response.status < 300) {
  //         console.log(response.data);
  //       } else {
  //         console.log(response.message);
  //       }
  //     }
  //   );
  // }
};
</script>
<style lang="scss" scoped>
#user {
  background: grey;
}
</style>
