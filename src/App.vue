<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
// import { onMounted } from "vue";
import Header from "@/components/Header/Header.vue";

export default {
  components: { Header },
  setup() {
    const router = useRouter();

    // onMounted(() => {
    //   let path = localStorage.getItem('path');
    //   if(path) {
    //     localStorage.removeItem('path');
    //     router.push(path);
    //   }
    // });

    return {};
  },
};
</script>

<style lang="less" src="./App.less"></style>
