<template>
  <div class="nearby">
    <h3 class="nearby__title">附件店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img class="nearby__item__img" :src="item.imgUrl" alt="" />
      <div class="nearby__item__content">
        <div class="nearby__item__content__title">{{ item.title }}</div>
        <div class="nearby__item__content__tags">
          <span
            class="nearby__item__content__tags__tag"
            v-for="(tag, index) in item.tags"
            :key="index"
            >{{ tag }}</span
          >
        </div>
        <p class="nearby__item__content__highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
  <toast v-if="toastData.show" :message="toastData.message"></toast>
</template>
<script>
import { ref } from "vue";
import { get } from "../../../src/uilts/request";
import Toast, { toastHandle } from "../../components/Toast.vue";
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
  components: { Toast },
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
  &__item {
    display: flex;
    padding-top: 0.12rem;

    &__img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
    &__content {
      padding-bottom: 0.12rem;
      flex: 1;
      border-bottom: 0.01rem solid $content-bgColor;
      &__title {
        line-height: 0.22remm;
        font-size: 0.16rem;
        color: $content-fontcolor;
      }
      &__tags {
        margin-top: 0.08rem;
        line-height: 0.12rem;
        font-size: 0.13rem;
        color: $content-fontcolor;
        &__tag {
          margin-right: 0.2rem;
        }
      }

      &__highlight {
        margin-top: 0.08rem;
        line-height: 0.18rem;
        font-size: 0.13rem;
        color: #e93b3b;
      }
    }
  }
}
</style>
