import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
    // 异步组件加载
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/home/Home.vue"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    // component: Shop,
    component: () =>
      import(/* webpackChunkName: "shop" */ "@/views/shop/Shop.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/login/Login.vue"),
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
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/regist/Regist.vue"),
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
