<script>
import { useRouter } from "vue-router";
import Toast, { toastHandle } from "../../components/Toast.vue";
import { reactive } from "vue";
import { post } from "@/uilts/request";
// 处理注册逻辑
const handleRegister = (showMessage, router) => {
  const data = reactive({
    username: "",
    password: "",
    confirm: "",
  });
  const register = async () => {
    try {
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        showMessage("注册失败");
      }
    } catch (e) {
      showMessage("请求失败");
    }
  };
  return { data, register };
};
// 处理登录逻辑
const handleLogin = (router) => {
  const login = () => {
    router.push({ name: "Login" });
  };
  return { login };
};
export default {
  name: "RegisterView",
  components: {
    Toast,
  },
  setup() {
    const router = useRouter();
    const { toastData, showMessage } = toastHandle();
    const { data, register } = handleRegister(showMessage, router);
    const { login } = handleLogin(router);
    return {
      data,
      register,
      login,
      toastData,
      showMessage,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="https://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="text"
        placeholder="请输入账号密码"
        v-bind="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="请输入密码"
        v-bind="data.password"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="确认密码"
        v-bind="data.confirm"
      />
    </div>
    <div class="wrapper__register-button" @click="register">注册</div>
    <div class="wrapper__register-link" @click="login">已有账号去登陆</div>
    <toast v-if="toastData.show">{{ toastData.message }}</toast>
  </div>
</template>

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
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__register-link {
    font-size: 0.14rem;
    color: content-notice-fontcolor;
    text-align: center;
  }
}
</style>
