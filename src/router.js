import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Recipe from './pages/Recipe.vue'
import Account from './pages/Account.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: Recipe,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router