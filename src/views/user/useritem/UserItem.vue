<template>
  <div class="user-item">
    <div class="user">
      <slot name="head_photo" class="photo"></slot>
      <slot name="name"></slot>
    </div>
    <div>
      <slot name="I_icon"></slot>
      <slot name="introduce"></slot>
    </div>
    <div>
      <slot name="H_icon"></slot>
      <slot name="history_purchase"></slot>
    </div>
    <div>
      <slot name="M_icon"></slot>
      <slot name="user_management"></slot>
    </div>
    <div>
      <slot name="S_icon"></slot>
      <slot name="setting"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user-item {
  .user {
    img {
      width: 50px;
      height: 70px;
      margin-top: 20px;
      border-radius: 50%;
    }
    span {
      position: relative;
      top: 45px;
    }
  }
  div {
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
      top: 5px;
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
