<template>
  <div class="router-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { useHead } from "@vueuse/head";

export default {
  setup() {
    useHead({
      title: "bravo",
      htmlAttrs: { lang: "en", amp: true },
      meta: [
        {
          property: "og:title",
          content: "bravo",
        },
      ],
    });
  },
};
</script>

<style lang="less" src="./Home.less" scoped></style>
