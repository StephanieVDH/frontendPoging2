import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue"; 
//import CampingSpots from "@/components/CampingSpots.vue";
//import CampingDetails from "@/components/CampingDetails.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", // Removes hash (#) from the URL
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    // {
    //   path: "/campingspots",
    //   name: "CampingSpots",
    //   component: CampingSpots,
    // },

    // // Route om van overzicht van alle spots naar één specifieke spot te gaan
    // {
    // path: "/campingspots/ID", // Route for details page
    // name: "CampingDetails",
    // component: CampingDetails,
    // props: true, // Pass the route parameters as props
    // },

  ],
});