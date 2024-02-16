import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import Login from "../views/login/Login.vue";
import Register from "@/views/register/Regist.vue";
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
  {
    path: "/Register",
    name: "Register",
    component: Register,
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
  if (isLogin || to.name === "Login" || to.name === "Register") {
    next();
  } else {
    next({ name: "Login" }); // 跳转到登录页面
  }
});
export default router;
