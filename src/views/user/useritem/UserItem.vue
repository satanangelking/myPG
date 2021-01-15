<template>
  <div class="user-item">
    <div class="img">
      <slot name="limg"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="img">
      <slot name="rimg"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user-item {
  height: 30px;
  padding: 5px 0;
  background: white;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  .content {
    flex: 1;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  span {
    display: inline-block;
  }

  // .photo {
  //   img {
  //     width: 50px;
  //     height: 70px;
  //   }
  //   span {
  //     top: 15px;
  //   }
  // }
  // div {
  //   position: relative;
  //   width: 100%;
  //   text-align: left;
  //   background: white;
  //   margin: 20px 0;
  //   img {
  //     width: 30px;
  //     height: 30px;
  //     margin: 10px 0;
  //     border-radius: 50%;
  //   }
  //   span {
  //     position: relative;
  //     top: 15px;
  //     margin-left: 20px;
  //   }
  // }
  // div::after {
  //   content: "";
  //   clear: both; /*清除浮动*/
  //   display: block; /*确保该元素是一个块级元素*/
  // }
}
</style>
