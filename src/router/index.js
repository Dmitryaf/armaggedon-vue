import { createRouter, createWebHistory } from 'vue-router';

import AsteroidsPage from '@/pages/AsteroidsPage.vue';
import CartPage from '@/pages/CartPage.vue';

const routes = [
  {
    path: '/asteroids',
    name: 'asteroids',
    component: AsteroidsPage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
