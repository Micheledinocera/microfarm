<template>
  <div class="header">
    <div class="title"> Microfarm </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, ComputedRef } from "vue";
import { ElNotification } from "element-plus";
import { RouterNames } from "@/router/RouterNames";

export default {
  name: "Header",
  setup() {

    return {
    };
  },
};
</script>

<style scoped lang="less" src="./Header.less"></style>
