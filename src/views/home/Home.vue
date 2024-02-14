<template>
  <div class="wrapper">
    <static-part></static-part>
    <near-by></near-by>
  </div>
  <docker-vue></docker-vue>
</template>
<script>
import StaticPart from "@/views/home/StaticPart";
import NearBy from "@/views/home/NearBy";
import DockerVue from "@/views/home/DockerVue";
export default {
  name: "HomeView",
  components: {
    NearBy,
    StaticPart,
    DockerVue,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
</style>
