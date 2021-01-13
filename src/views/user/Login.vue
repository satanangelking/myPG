<template>
  <div id="login">
    <img src="@/assets/logo.png" alt="" />
    <input type="text" v-model="loginForm.username" placeholder="用户名" />
    <input type="text" v-model="loginForm.password" placeholder="密码" />
    <div class="button">
      <button @click="login">登录</button>
      <button @click="register">注册</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import require from "@/network/request.js";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapMutations(["changeLogin"]),
    async login() {
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        const res = await require({
          method: "post",
          url: "/aac.php/",
          data: this.loginForm
        });
        const { data, meta } = res.data;

        if (meta.code == 200) {
          localStorage.setItem("token", data.token);

          this.$router.push("/purchase");
          window.location.reload(); //重新刷新页面
        }
        // console.log(data);
        // console.log(meta);
      }
    },
    register() {
      this.$router.push("/register");
    }
    // login() {
    //   let _this = this;
    //   if (this.loginForm.username === "" || this.loginForm.password === "") {
    //     alert("账号或密码不能为空");
    //   } else {
    //     require({
    //       method: "post",
    //       url: "/aac.php/",
    //       data: _this.loginForm
    //     })
    //       .then(res => {
    //         _this.$router.push("/purchase");
    //         console.log(res);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }
    // }
  }
  // login () {
  // // axios
  // //   .get("/api/Project/studentsGrade/aab.php")
  // //   .then(function(response) {
  // //     console.log(response);
  // //   })
  // //   .catch(error => {
  // //     console.log(error);
  // //   });
  // login() {
  //   request({
  //     url: `aac.php?account=${this.loginForm.username}&password=${this.loginForm.password}`
  //   }).then(res => {
  //     console.log(res);
  //   });
  // }

  // login() {
  //   require({
  //     method: "post",
  //     url: `/aac.php/`,
  //     data: this.loginForm
  //   }).then(res => {
  //     console.log(res);
  //   });
  // }

  // login() {
  //   axios
  //     .post("api/Project/studentsGrade/aaq.php", {
  //       a: "10"
  //     })
  //     .then(res => {
  //       console.log(res);
  //     });
  // }
};
</script>
<style lang="scss" scoped>
#login {
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  justify-content: flex-end;
  input {
    outline: none;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  img {
    width: 100%；;
    height: 300px;
  }
  .button {
    display: flex;
    justify-content: space-between;
    button {
      padding: 4px;
      border-radius: 6px;
      outline: none;
    }
  }
}
</style>
