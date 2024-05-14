<template>
  <div class="nearby">
    <h3 class="nearby__title">附件店铺</h3>
    <router-link v-for="item in nearbyList" :key="item.id" to="/shop">
      <shop-info :item="item"></shop-info>
    </router-link>
  </div>
  <toast v-if="toastData.show" :message="toastData.message"></toast>
</template>
<script>
import { ref } from "vue";
import { get } from "../../../src/uilts/request";
import Toast, { toastHandle } from "../../components/Toast.vue";
import shopInfo from "../../components/shopInfo.vue";
const handleRequestData = (showMessage) => {
  const getNearby = async () => {
    try {
      const result = await get("api/list/hot");
      if (result?.errcode === 0) {
        return result?.data;
      } else {
        showMessage("获取数据失败");
      }
    } catch (e) {
      showMessage("获取数据失败");
    }
  };
  return { getNearby };
};
export default {
  name: "NearBy",
  components: { Toast, shopInfo },
  setup() {
    const nearbyList = ref([]);
    const { toastData, showMessage } = toastHandle();
    const { getNearby } = handleRequestData(showMessage);
    getNearby().then((result) => {
      nearbyList.value = result;
    });
    return { nearbyList, toastData, showMessage };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.04rem 0;
    font-size: 0.16rem;
    color: $content-fontcolor;
    font-weight: normal;
  }
  a {
    text-decoration: none;
  }
}
</style>
