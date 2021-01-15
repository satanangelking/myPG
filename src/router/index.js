import Vue from "vue";
import Router from "vue-router";

import Purchase from "@/views/purchase/Purchase";
import Fruits from "@/views/fruits/Fruits";
import Users from "@/views/user/Users";
import Login from "@/views/user/Login";
import Register from "@/views/user/Register";
import Setting from "@/views/user/setting/Setting";
import UserChange from "@/views/user/setting/userchange/UserChange";
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

const routes = [
  {
    name: "Purchase",
    path: "/purchase",
    component: Purchase
  },
  {
    name: "Fruits",
    path: "/fruits",
    component: Fruits
  },
  {
    name: "Users",
    path: "/users",
    component: Users,
    children: []
  },
  {
    name: "Setting",
    path: "/setting",
    component: Setting
  },
  {
    name: "UserChange",
    path: "/userchange",
    component: UserChange
  },
  {
    name: "Login",
    path: "/login",
    component: Login
  },
  {
    name: "Register",
    path: "/register",
    component: Register
  }
];

const router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (to.path == "/login") {
    // let token = localStorage.getItem("token");
    if (token) {
      next({
        path: "/purchase"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
