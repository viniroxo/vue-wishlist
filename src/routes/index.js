import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Wishlist from '../views/Wishlist.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/wishlist',
    component: Wishlist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
