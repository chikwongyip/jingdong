<template>
  <div class="wrapper">
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
  padding: 0, 0.18rem;
}
</style>
