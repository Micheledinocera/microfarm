<template>
  <div class="footer">
    <div class="title">Microfarm</div>
    <div class="divider"></div>
    <div class="copyright">© Photo, Inc. 2019. We love our users!</div>
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

<style scoped lang="less" src="./Footer.less"></style>
