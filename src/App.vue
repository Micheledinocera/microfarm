<template>
  <div class="app">
    <perfect-scrollbar id="app-container" class="app-container" ref="scroll">
      <Header />
      <router-view />
      <Footer />
    </perfect-scrollbar>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: { Header, Footer },
  setup() {
    const router = useRouter();

    onMounted(() => {
      let path = localStorage.getItem("path");
      if (path) {
        localStorage.removeItem("path");
        router.push(path);
      }
    });

    return {};
  },
};
</script>

<style lang="less" src="./App.less"></style>
