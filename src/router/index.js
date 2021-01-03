import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middleware: 'auth'
    },
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
        const middleware = require(`../middleware/${to.meta.middleware}`);
        if (middleware) {
            middleware.default(next, store);
        } else {
          next();
        }
    } else {
      next();
    }
})

export default router
