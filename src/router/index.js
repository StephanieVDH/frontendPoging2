import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue"; 
import ExploreSpots from "@/components/ExploreSpots.vue";
import Login from "@/components/Login.vue";
import CampingDetails from "@/components/CampingDetails.vue";
import ProfilePage from "@/components/ProfilePage.vue";

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
    path: '/host-profile',
    name: 'HostProfile',
    component: ProfilePage,
    meta: { userType: 'Host' },
  },
  {
    path: '/customer-profile',
    name: 'CustomerProfile',
    component: ProfilePage,
    meta: { userType: 'Customer' },
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

router.beforeEach((to, from, next) => {
  const userType = localStorage.getItem('userType');
  if ((to.path === '/host-profile' || to.path === '/customer-profile') && !userType) {
    return next('/login'); // Redirect to login if not authenticated
  }

  if (to.meta.userType && to.meta.userType !== userType) {
    return next('/'); // Redirect to home if user type doesn't match
  }

  next();
});


export default router