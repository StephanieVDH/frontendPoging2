import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue"; 
import ExploreSpots from "@/components/ExploreSpots.vue";
//import CampingDetails from "@/components/CampingDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },

  {
    path: '/explorespots',
    name: 'ExploreSpots',
    component: ExploreSpots,
  },
  
]

const router = new VueRouter ({
  mode: 'history',
  routes
});

export default router