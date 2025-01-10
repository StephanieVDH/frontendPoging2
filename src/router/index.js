import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue"; 
import ExploreSpots from "@/components/ExploreSpots.vue";
import Login from "@/components/Login.vue";
import CampingDetails from "@/components/CampingDetails.vue";
import ProfilePage from "@/components/ProfilePage.vue";
import AddNewSpot from "@/components/AddNewSpot.vue";
import CreateAccount from "@/components/CreateAccount.vue";

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

  {
    path: '/explorespots/:id',
    name: 'CampingDetails',
    component: CampingDetails,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/create-account',
    name: 'CreateAccount',
    component: CreateAccount
  },

  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },

  {
    path: '/addnewspot',
    name: 'AddNewSpot',
    component: AddNewSpot
  },

  {
    path: '*',
    redirect: '/', // Redirect to home for unmatched routes
  },
]

const router = new VueRouter ({
  mode: 'history',
  routes
});

export default router