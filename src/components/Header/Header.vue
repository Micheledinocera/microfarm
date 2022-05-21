<template>
  <div class="header">
    <div class="title">Microfarm</div>
    <div class="navigation">
      <router-link :to="'/' + $options.MAIN_PAGE"> Home </router-link>
      <router-link :to="'/' + $options.ORTO_PAGE"> Orto </router-link>
      <router-link :to="'/' + $options.ARNIA_PAGE"> Arnia </router-link>
      <router-link :to="'/' + $options.POLLAIO_PAGE"> Pollaio </router-link>
      <a href="https://www.kickstarter.com/" target="_blank"> Crowdfunding </a>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterNames } from "@/router/RouterNames";

export default {
  name: "Header",
  ORTO_PAGE: RouterNames.ORTO_PAGE,
  MAIN_PAGE: RouterNames.MAIN_PAGE,
  ARNIA_PAGE: RouterNames.ARNIA_PAGE,
  POLLAIO_PAGE: RouterNames.POLLAIO_PAGE,
  setup() {
    return {};
  },
};
</script>

<style scoped lang="less" src="./Header.less"></style>
