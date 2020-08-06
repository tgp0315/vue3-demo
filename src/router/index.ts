import { RouteConfig, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "name",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "demo" */ "../views/demo.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
