<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe7f1;</span>
    好来化工中山有限公司
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
  <div class="icons">
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt=""
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        alt=""
      />
      <p class="icons__item__desc">菜市场</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        alt=""
      />
      <p class="icons__item__desc">水果店</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        alt=""
      />
      <p class="icons__item__desc">鲜花绿植</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        alt=""
      />
      <p class="icons__item__desc">医药健康</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/家居.png"
        alt=""
      />
      <p class="icons__item__desc">家居时尚</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        alt=""
      />
      <p class="icons__item__desc">烘焙蛋糕</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/签到.png"
        alt=""
      />
      <p class="icons__item__desc">签到</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        alt=""
      />
      <p class="icons__item__desc">大牌免运</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/红包.png"
        alt=""
      />
      <p class="icons__item__desc">红包套餐</p>
    </div>
  </div>
  <div class="gap"></div>
</template>
<script>
export default {
  name: "StaticPart",
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
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
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: 0.1rem;
  background: #f1f1f1;
  margin: 0 -0.18rem;
}
</style>
