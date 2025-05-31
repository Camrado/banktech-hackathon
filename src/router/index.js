import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue');
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
