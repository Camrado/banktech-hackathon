import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: function () {
      return import(/* webpackChunkName: "leaderboard" */ '../views/LeaderboardView.vue');
    }
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: function () {
      return import(/* webpackChunkName: "tasks" */ '../views/TasksView.vue');
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
