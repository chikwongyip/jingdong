<template>
  <div class="toast">{{ message }}</div>
</template>
<script>
import { reactive } from "vue";
export const toastHandle = () => {
  const toastData = reactive({
    show: false,
    message: "",
  });
  const showMessage = (message) => {
    toastData.show = true;
    toastData.message = message;
    setTimeout(() => {
      toastData.show = false;
      toastData.message = "";
    }, 2000);
  };
  return { toastData, showMessage };
};
export default {
  name: "ToastView",
  props: ["message"],
};
</script>
<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
}
</style>
