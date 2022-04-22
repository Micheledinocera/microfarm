<template>
  <div class="header">
    <div class="title"> Microfarm </div>
    <router-link :to="'/'+$options.ABOUT">Home</router-link>
    <router-link :to="'/'+$options.DEMO_PAGE">Demo</router-link>
  </div>
</template>

<script lang="ts">
import { RouterNames } from '@/router/RouterNames';

export default {
  name: "Header",
  DEMO_PAGE: RouterNames.DEMO_PAGE,
  ABOUT: RouterNames.ABOUT,
  setup() {

    return {
    };
  },
};
</script>

<style scoped lang="less" src="./Header.less"></style>
