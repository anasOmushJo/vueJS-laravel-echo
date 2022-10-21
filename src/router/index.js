import Vue from "vue";
import VueRouter from "vue-router";
import PageNotFoundRoutes from "./modules/page_not_found";
import Root from "./Root";
import homeRoutes from "./modules/home";

Vue.use(VueRouter);

const routes = [
  {
    path: `/`,
    component: Root,
    children: [...homeRoutes, ...PageNotFoundRoutes],
  },
  ...PageNotFoundRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
