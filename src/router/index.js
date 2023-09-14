import { createRouter, createWebHistory } from 'vue-router';

import AsteroidsPage from '@/pages/AsteroidsPage.vue';
import CartPage from '@/pages/CartPage.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/asteroids',
  },
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
router.replace({ path: '*', redirect: '/asteroids ' });

export { router, routes };
