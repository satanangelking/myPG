import Vue from "vue";
import Router from "vue-router";

import Purchase from "@/views/purchase/Purchase";
import Fruits from "@/views/fruits/Fruits";
import Users from "@/views/user/Users";
import Login from "@/views/user/Login";
import Register from "@/views/user/Register";

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
    component: Users
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
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    let token = localStorage.getItem("Authorization");
    if (token == "null" || token == "") {
      next("login");
    } else {
      next();
    }
  }
});

export default router;
