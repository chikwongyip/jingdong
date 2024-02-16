import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import Login from "../views/login/Login.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      if (isLogin) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  if (isLogin || to.name === "Login") {
    next();
  } else {
    console.log("未登录");
    next({ name: "Login" }); // 跳转到登录页面
  }
});
export default router;
