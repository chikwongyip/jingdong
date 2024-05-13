<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont">&#xe662;</div>
      <div class="search__content">
        <span class="search__content__icon"></span>
        <span class="search__content_input"></span>
      </div>
    </div>
    <shop-info :item="item"></shop-info>
  </div>
</template>
<script>
import ShopInfo from "@/components/shopInfo.vue";
export default {
  name: "ShopIndex",
  components: {
    ShopInfo,
  },
  setup() {
    const item = {
      id: 1,
      name: "沃尔玛",
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      sales: 1000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "vip 尊享满89减5",
    };
    return {
      item,
    };
  },
};
</script>
<style lang="scss" scoped>
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
    font-size: 0.25rem;
    color: #b6b6b6;
  }
  &__content {
    flex: 1;
    line-height: 0.32rem;
    border-radius: 16rem;
    background: #f5f5f5;
    display: flex;
    &__icon {
      width: 0.44rem;
      height: 0.32rem;
    }
    &__input {
      height: 0.32rem;
      border: none;
      outline: none;
      background: none;
      width: 100%;
      padding-right: 0.2rem;
    }
  }
}
</style>
