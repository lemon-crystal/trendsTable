import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/trendsTable",
    name: "trendsTable",
    component: () =>
      import("../components/trendsTable")
  },
  {
    path: "/",
    name: "onrenewal",
    component: () =>
      import("../views/onrenewal")
  },
  {
    path: "/selectTree",
    name: "selectTree",
    component: () =>
      import("../views/selectTree")
  },
];

const router = new VueRouter({
  routes
});

export default router;
