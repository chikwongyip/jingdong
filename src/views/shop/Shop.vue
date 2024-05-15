<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe662;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe648;</span>
        <input
          type="text"
          class="search__content__input"
          placeholder="搜索商品"
        />
      </div>
    </div>
    <shop-info :item="data.item" v-show="data.item.imgUrl"></shop-info>
    <Content></Content>
  </div>
</template>
<script>
import ShopInfo from "@/components/shopInfo.vue";
import Content from "./Content.vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../uilts/request";
import { reactive } from "vue";
// 获取当前商户信息
const getCurrentShop = () => {
  const route = useRoute();
  const data = reactive({
    item: {},
  });
  const getItemData = async () => {
    const result = await get("/api/shop/" + route.params.id);
    if (result?.errcode === 0) {
      data.item = result.data;
    }
  };

  return {
    data,
    getItemData,
  };
};
// 处理页面跳转
const handleRoute = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return {
    handleBackClick,
  };
};
export default {
  name: "ShopIndex",
  components: {
    ShopInfo,
    Content,
  },
  setup() {
    const { data, getItemData } = getCurrentShop();
    const { handleBackClick } = handleRoute();
    getItemData();
    return {
      data,
      handleBackClick,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";
.wrapper {
  padding: 0 0.2rem;
}
.search {
  margin: 0.2rem 0 0.16rem 0;
  display: flex;
  &__back {
    width: 0.3rem;
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: 0.3rem;
    color: #b6b6b6;
  }
  &__content {
    flex: 1;
    line-height: 0.32rem;
    border-radius: 16rem;
    background: $search-bgColor;
    display: flex;
    &__icon {
      width: 0.44rem;
      align-items: center;
      color: $search-fontColor;
      font-size: 0.16rem;
      padding-left: 0.12rem;
    }
    &__input {
      height: 0.32rem;
      border: none;
      outline: none;
      background: none;
      width: 100%;
      padding-right: 0.2rem;
      color: #333;
      font-size: 0.14rem;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
