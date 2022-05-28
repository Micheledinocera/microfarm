import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";
import NotFound from "../components/NotFound/NotFound.vue";
import MainPage from "../views/Home/MainPage/MainPage.vue";
import OrtoPage from "../views/Home/OrtoPage/OrtoPage.vue";
import ArniaPage from "../views/Home/ArniaPage/ArniaPage.vue";
import PollaioPage from "../views/Home/PollaioPage/PollaioPage.vue";
import { RouterNames } from "./RouterNames";
// import { ref } from "vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouterNames.HOME,
    component: Home,
    children: [
      {
        path: RouterNames.MAIN_PAGE,
        name: RouterNames.MAIN_PAGE,
        component: MainPage,
      },
      {
        path: RouterNames.ORTO_PAGE,
        name: RouterNames.ORTO_PAGE,
        component: OrtoPage,
      },
      {
        path: RouterNames.ARNIA_PAGE,
        name: RouterNames.ARNIA_PAGE,
        component: ArniaPage,
      },
      {
        path: RouterNames.POLLAIO_PAGE,
        name: RouterNames.POLLAIO_PAGE,
        component: PollaioPage,
      },
    ],
  },
  {
    path: "/" + RouterNames.NOTFOUND,
    name: RouterNames.NOTFOUND,
    component: NotFound,
  },
  { path: "/:pathMatch(.*)*", redirect: { name: RouterNames.MAIN_PAGE } },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name == RouterNames.HOME) router.push({ name: RouterNames.MAIN_PAGE });
  else next();
});

router.afterEach(async (to, from) => {
  (document.getElementById("app-container") as Element).scrollTo(50, 0);
});

export default router;
