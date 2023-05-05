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
  {
    path: '/examples/darkmode',
    component: () => import('@/examples/darkmode.vue'),
  },
  {
    path: '/examples/i18n',
    component: () => import('@/examples/i18n.vue'),
  },
  {
    path: '/examples/store',
    component: () => import('@/examples/store.vue'),
  },
];

// url without hash
const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

export default router