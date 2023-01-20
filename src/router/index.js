import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MovieList.vue'),
  },
  {
    path: '/moviedetail/:id',
    name: 'moviedetail',
    param: 'id',
    component: () => import('../views/MovieDetail.vue'),
  },
  {
    path: '/selectseat/:id',
    name: 'selectseat',
    param: 'id',
    component: () => import('../views/SelectSeat.vue'),
  },
  {
    path: '/moviehistory/',
    name: 'moviehistory',
    component: () => import('../views/MovieHistory.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
