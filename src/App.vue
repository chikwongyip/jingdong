<template>
  <div class="docker">
    <!-- block__element--modifier docker 下面 docker--item item的状态 docker__item--status -->
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe644;</div>
      <div class="docker__item__title">主页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe6af;</div>
      <div class="docker__item__title">购物车</div>
    </span>

    <span class="docker__item">
      <div class="iconfont">&#xe713;</div>
      <div class="docker__item__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe78b;</div>
      <div class="docker__item__title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  padding: 0 0.18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49 rem;
  border-top: 1px solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
      &__title {
        font-size: 20px;
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
