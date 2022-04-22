import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";
import NotFound from "../components/NotFound/NotFound.vue";
import About from "../views/Home/About/About.vue";
import DemoPage from "../views/Home/DemoPage/DemoPage.vue";
import { RouterNames } from "./RouterNames";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouterNames.HOME,
    component: Home,
    children: [
      {
        path: RouterNames.ABOUT,
        name: RouterNames.ABOUT,
        component: About,
      },
      {
        path: RouterNames.DEMO_PAGE,
        name: RouterNames.DEMO_PAGE,
        component: DemoPage,
      }
    ],
  },
  {
    path: "/" + RouterNames.NOTFOUND,
    name: RouterNames.NOTFOUND,
    component: NotFound,
  },
  { path: "/:pathMatch(.*)*", redirect: { name: RouterNames.NOTFOUND } },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   next();
// });

export default router;
