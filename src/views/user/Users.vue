<template>
  <div id="user">
    <div class="photo">
      <UserItem>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1983364455,1831671477&fm=26&gp=0.jpg"
          alt=""
        />
        <span>satanangelking</span>
      </UserItem>
    </div>
    <div>
      <UserItem
        ><img src="@/assets/user/Introduction.png" alt="" />
        <span>简介</span></UserItem
      >
    </div>
    <div>
      <UserItem
        ><img src="@/assets/user/history.png" alt="" />
        <span>采购记录</span></UserItem
      >
    </div>
    <div>
      <UserItem
        ><img src="@/assets/user/manager.png" alt="" />
        <span>用户管理</span></UserItem
      >
    </div>
    <div>
      <UserItem
        ><img src="@/assets/user/setting.png" alt="" />
        <span>设置</span></UserItem
      >
    </div>
    <div @click="quit">
      <UserItem
        ><img src="@/assets/user/setting.png" alt="" />
        <span>退出</span></UserItem
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
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
};
</script>
<style lang="scss" scoped>
#user {
  background: grey;
  .photo {
    img {
      width: 50px;
      height: 70px;
    }
    span {
      top: 45px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    margin: 10px 0;
    border-radius: 50%;
  }
  div {
    position: relative;
    width: 100%;
    text-align: left;
    background: white;
    margin: 20px 0;
    img {
      width: 30px;
      height: 30px;
      float: left;
    }
    span {
      position: relative;
      top: 15px;
      margin-left: 20px;
    }
  }
  div::after {
    content: "";
    clear: both; /*清除浮动*/
    display: block; /*确保该元素是一个块级元素*/
  }
}
</style>
