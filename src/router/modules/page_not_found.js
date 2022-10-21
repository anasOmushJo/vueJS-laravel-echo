import PageNotFound from "@/views/PageNotFound.vue";
import { commonBeforeEnter } from "../helper";

const routes = [
  {
    path: "*",
    component: PageNotFound,
    meta: {
      addClass: [`login-page`],
    },
    beforeEnter: function(to, from, next) {
      commonBeforeEnter(to, from, next);
      next();
    },
  },
];

export default routes;
