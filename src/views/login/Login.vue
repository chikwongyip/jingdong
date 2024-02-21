<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="text"
        placeholder="请输入账号"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper__login-button" @click="login">登录</div>
    <div class="wrapper__login-link" @click="register">立即注册</div>
  </div>
  <toast v-if="toastData.show" :message="toastData.message"></toast>
</template>
<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { post } from "../../uilts/request";
import Toast, { toastHandle } from "../../components/Toast.vue";

// 处理登录
const handleLogin = (showMessage, router) => {
  const data = reactive({
    username: "",
    password: "",
  });
  const login = async () => {
    try {
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        await router.push({ name: "Home" });
      } else {
        showMessage("登录失败");
      }
    } catch (e) {
      showMessage("登录失败");
    }
  };
  return { data, login };
};
// 处理注册
const handleRegister = (router) => {
  const register = () => {
    router.push({ name: "Register" });
  };
  return { register };
};
export default {
  name: "LoginView",
  components: {
    Toast,
  },
  setup() {
    const router = useRouter();
    const { toastData, showMessage } = toastHandle();
    const { data, login } = handleLogin(showMessage, router);
    const { register } = handleRegister(router);
    return {
      login,
      register,
      data,
      toastData,
      // showMessage,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: content-notice-fontcolor;
      &::placeholder {
        color: content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    font-size: 0.14rem;
    color: content-notice-fontcolor;
    text-align: center;
  }
}
</style>
