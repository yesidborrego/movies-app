import Vue from "vue";
import VueRouter from "vue-router";
import MoviesPage from "@/views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MoviesPage,
  },
  {
    path: "/movie/:slug",
    name: "movie-details",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/movieDetails/index.vue"),
    props: (route) => {
      return { slug: route.params.slug };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
