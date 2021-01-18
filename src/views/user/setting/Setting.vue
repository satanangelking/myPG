<template>
  <div id="setting">
    <HeadBar>
      <HeadBarItem>
        <p>设置</p>
      </HeadBarItem>
    </HeadBar>
    <div @click="usermessagechange">
      <UserItem>
        <img slot="limg" src="@/assets/common/账号资料管理.png" alt="" />
        <span slot="content">账号资料</span>
        <img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
      </UserItem>
    </div>
    <div @click="accountchange">
      <UserItem>
        <img slot="limg" src="@/assets/common/账号安全.png" alt="" />
        <span slot="content">账号安全</span>
        <img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
      </UserItem>
    </div>
    <UserItem>
      <img slot="limg" src="@/assets/common/隐私协议.png" alt="" />
      <span slot="content">隐私</span>
      <img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
    </UserItem>
    <UserItem>
      <img slot="limg" src="@/assets/common/意见反馈.png" alt="" />
      <span slot="content">意见反馈</span>
      <img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
    </UserItem>
    <div @click="quit" class="quit">
      退出当前账号
    </div>
  </div>
</template>
<script>
import UserItem from "@/views/user/useritem/UserItem";
import HeadBar from "@/components/header/HeadBar";
import HeadBarItem from "@/components/header/HeadBarItem";
export default {
  components: {
    UserItem,
    HeadBar,
    HeadBarItem
  },
  methods: {
    quit() {
      localStorage.removeItem("token");
      window.location.reload();
    },
    accountchange() {
      this.$router.push("/userchange");
    }
  }
};
</script>

<style lang="scss" scoped>
#setting {
  height: 100%;
  width: 100%;
  background: #dcdcdc repeat;
  .quit {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: white;
    text-align: center;
  }
}
</style>
