import Vue from "vue";
import Router from "vue-router";

import Purchase from "@/views/purchase/Purchase";
import Fruits from "@/views/fruits/Fruits";
import Users from "@/views/user/Users";

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
  }
];

const router = new Router({
  routes
});

export default router;
