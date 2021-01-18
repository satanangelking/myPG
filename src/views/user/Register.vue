<template>
  <div id="register">
    <HeadBar>
      <HeadBarItem> </HeadBarItem>
    </HeadBar>
    <div>
      <label for="account">
        <span>用户名:</span>
        <input
          type="text"
          v-model="Rform.account"
          id="account"
          @blur="taccount()"
        />
      </label>
    </div>
    <div
      :class="{
        alert: isActiveAcc
      }"
    >
      {{ Maccount }}
    </div>
    <div>
      <label for="password">
        <span>密码:</span>
        <input type="text" v-model="Rform.pwd" id="password" @blur="tpwd()" />
      </label>
    </div>
    <div :class="{ alert: isActivePwd }">{{ Mpwd }}</div>
    <div>
      <label for="repwd">
        <span>确认密码:</span>
        <input type="text" v-model="Rform.repwd" id="repwd" @blur="trepwd()" />
      </label>
    </div>
    <div :class="{ alert: isActivePwd }">{{ Mrepwd }}</div>
    <!-- <div>
      <label for="identify">
        <span>验证码:</span>
        <input
          type="text"
          v-model="Rform.identify"
          id="identify"
          @blur="tidentify"
        />
        <button>获取</button>
      </label>
    </div> -->

    <button @click="register">注册</button>
  </div>
</template>
<script>
import HeadBar from "@/components/header/HeadBar";
import HeadBarItem from "@/components/header/HeadBarItem";
import require from "@/network/request.js";
export default {
  data() {
    return {
      isActiveAcc: false,
      isActivePwd: false,
      isActiveRepwd: false,
      Rform: {
        account: "",
        pwd: "",
        repwd: "",
        identify: ""
      },
      account: "",
      pwd: "",
      repwd: "",
      Maccount: "",
      Mpwd: "",
      Mrepwd: ""
    };
  },
  components: {
    HeadBar,
    HeadBarItem
  },
  methods: {
    register() {
      require({
        method: "post",
        url: "/register.php/",
        data: this.Rform
      }).then(res => {
        const data = res.data;
        // console.log(res);
        if (data.meta.code != 200) {
          alert(data.meta.message);
        } else {
          localStorage.setItem("token", data.data.token);
          this.$router.push("/purchase");
          window.location.reload();
        }
      });
    },
    taccount() {
      this.account = this.Rform.account;
    },
    tpwd() {
      this.pwd = this.Rform.pwd;
    },
    trepwd() {
      if (this.Rform.repwd) {
        if (this.Rform.pwd === this.Rform.repwd) {
          this.Mrepwd = "";
          this.isActiveRepwd = false;
        } else {
          this.Mrepwd = "与原密码不符合";
          this.isActiveRepwd = true;
        }
      } else {
        this.Mrepwd = "";
        this.isActiveRepwd = false;
      }
    },
    tidentify() {
      this.identify = this.Rform.identify;
    }
  },
  computed: {},
  watch: {
    account() {
      if (this.account.length === 0) {
        this.Maccount = "";
        this.isActiveAcc = false;
      } else {
        if (!this.account.match(/^[a-zA-z]/g)) {
          this.Maccount = "请以字母开头";
          this.isActiveAcc = true;
        } else if (!this.account.match(/\w{6,}/g)) {
          this.Maccount = "账号长度大于6";
          this.isActiveAcc = true;
        } else {
          this.Maccount = "";
          this.isActiveAcc = false;
        }
      }
    },
    pwd() {
      if (this.pwd.length === 0) {
        this.isActivePwd = false;
        this.Mpwd = "";
      } else {
        if (!this.pwd.match(/[A-Z]+/g)) {
          this.isActivePwd = true;
          this.Mpwd = "必须包含大小写及数字";
        } else if (!this.pwd.match(/[a-z]+/g)) {
          this.isActivePwd = true;
          this.Mpwd = "必须包含大小写及数字";
        } else if (!this.pwd.match(/[0-9]+/g)) {
          this.isActivePwd = true;
          this.Mpwd = "必须包含大小写及数字";
        } else if (this.pwd.match(/[\u4e00-\u9fa5]+/g)) {
          this.isActivePwd = true;
          this.Mpwd = "不能包含中文字符";
        } else {
          this.isActivePwd = false;
          this.Mpwd = "";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#register {
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
    span {
      display: inline-block;
      width: 80px;
      height: 30px;
    }
    button {
      margin-left: 10px;
    }
  }
  .alert {
    padding: 10px 0;
    text-align: center;
    color: red;
  }
}
</style>
