<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe7f1;</span>
      中山星恒园
      <span class="iconfont position__notice">&#xe887;</span>
    </div>

    <div class="search">
      <span class="iconfont">&#xe648;</span>
      <span class="search__text"> 双11劲惠来袭!</span>
    </div>
    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt=""
      />
    </div>
  </div>
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
@import "@/style/variables.scss";
@import "@/style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;

  border-radius: 0.16rem;

  .iconfont {
    position: relative;
    top: 0.02rem;
    left: 0.01rem;
    font-size: 0.2rem;
    padding: 0 0.06rem 0 0.12rem;
    display: inline-block;
  }
  &__text {
    font-size: 0.14rem;
    color: #b7b7b7;
  }
}
.banner {
  &__img {
    width: 100%;
  }
}
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
