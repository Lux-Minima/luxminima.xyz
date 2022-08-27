import Vue from "vue";
import VueRouter from "vue-router";
import lux from "../views/lux.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "lux",
    component: lux
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/log",
    name: "log",
    component: () => import("../views/log.vue")
  },
  {
    path: "/usr",
    name: "usr",
    component: () => import("../views/usr.vue")
  },
  {
    path: "/music",
    name: "music",
    component: () => import("../views/music.vue")
  },
  {
    path: "/arc",
    name: "archive",
    component: () => import("../views/archive.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../components/logged.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
