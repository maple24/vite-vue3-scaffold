import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/homepage.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/about.vue'),
  },
];

// url without hash
const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

export default router