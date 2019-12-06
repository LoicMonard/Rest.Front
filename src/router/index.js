import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Category from '../components/Category.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAuth: false },
    children: [
      {
        path: ':theme',
        name: 'homeitem',
        component: Category,
        meta: { requiresAuth: false },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.authenticated) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
