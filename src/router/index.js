import { createRouter, createWebHistory } from 'vue-router';

import AsteroidsPage from '@/pages/AsteroidsPage.vue';
import CartPage from '@/pages/CartPage.vue';

const routes = [
  {
    path: '/asteroids',
    name: 'Астеройды',
    component: AsteroidsPage,
  },
  {
    path: '/cart',
    name: 'Корзина',
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
