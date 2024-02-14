<template>
  <div class="docker">
    <!-- block__element--modifier docker 下面 docker--item item的状态 docker__item--status -->
    <span
      v-for="(item, index) in dockerList"
      :key="item.icon"
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
      class="docker__item"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__item__title">{{ item.text }}</div>
    </span>
  </div>
</template>
<script>
export default {
  name: "DockerVue",
  setup() {
    const dockerList = [
      { icon: "&#xe644;", text: "主页" },
      { icon: "&#xe6af;", text: "购物车" },
      { icon: "&#xe713;", text: "订单" },
      { icon: "&#xe78b;", text: "我的" },
    ];
    return {
      dockerList,
    };
  },
};
</script>
<style lang="scss" scoped>
.docker {
  display: flex;
  box-sizing: border-box;
  padding: 0 0.18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49 rem;
  border-top: 0.01rem solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
      &__title {
        font-size: 0.2rem;
        transform: scale(0.5, 0.5);
        transform-origin: center top;
      }
    }
    &--active {
      color: #1fa4fc;
    }
  }
}
</style>
