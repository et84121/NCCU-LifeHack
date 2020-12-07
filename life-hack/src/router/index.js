import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/map",
    name: "Map",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "map" */ "../views/mapView.vue")
  },
  {
    path: "/move",
    name: "Move",
    component: () =>
      import(/* webpackChunkName: "move" */ "../views/Moving.vue")
  },
  {
    path: "/dorm",
    name: "dorm",
    component: () =>
      import(/* webpackChunkName: "dorm" */ "../views/Dormitory.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
