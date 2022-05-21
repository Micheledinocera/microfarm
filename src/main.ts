import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import { createHead } from "@vueuse/head";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(createHead());
app.use(ElementPlus);
app.use(PerfectScrollbar);
app.mount("#app");
