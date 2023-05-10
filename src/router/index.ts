import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages'

const Routes = [
  ...routes,
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
  {
    path: '/examples/theme',
    component: () => import('@/examples/theme.vue'),
  },
  {
    path: '/examples/icone',
    component: () => import('@/examples/icone.vue'),
  },
];

// url without hash
const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes: Routes,
});

export default router