import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const NotFound = () => import('../views/NotFound.vue');
const DefaultLayout = () => import('../layouts/DefaultLayout.vue');

const routes: RouteRecordRaw[] = [{
  path: '/',
  component: DefaultLayout,
  children: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', name: 'NotFound', component: NotFound },
  ]
}]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;