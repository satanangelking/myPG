<template>
  <div id="user-change">
    <HeadBar>
      <HeadBarItem>
        <p>设置</p>
      </HeadBarItem>
    </HeadBar>
    <div @click="pwd">
      <UserItem
        ><img slot="limg" src="@/assets/user/userchange/密码.png" alt="" />
        <span slot="content">密码修改</span>
        <img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
      </UserItem>
    </div>

    <UserItem
      ><img slot="limg" src="@/assets/user/userchange/电话.png" alt="" />
      <span slot="content">密保修改</span>
      <img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
    </UserItem>

    <UserItem
      ><img slot="limg" src="@/assets/user/userchange/简介.png" alt="" />
      <span slot="content">修改密保</span
      ><img slot="rimg" src="@/assets/common/右箭头.png" alt="" />
    </UserItem>
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
    pwd() {
      this.$router.push("/pwdchange");
    }
  }
};
</script>
