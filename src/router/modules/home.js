import Home from "@/views/home.vue";
import { commonBeforeEnter } from "../helper";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
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
