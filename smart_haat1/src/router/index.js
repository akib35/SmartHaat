import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/Home',
    name: 'home',
    component: HomeView,
    meta: {
      enterClass: 'animate_animated animate_fadeInLeft',
      leaveClass: 'animate_animated animate_fadeOutRight',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      enterClass: 'animate_animated animate_fadeInLeft',
      leaveClass: 'animate_animated animate_fadeOutRight',
    },
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/AddToCart.vue'),
    meta: {
      enterClass: 'animate_animated animate_fadeInRight',
      leaveClass: 'animate_animated animate_fadeOutLeft',
    },
  },
  {
    path: '/Wishlist',
    name: 'Wishlist',
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Wishlist" */ '../views/WishlistView.vue'),
    meta: {
      enterClass: 'animate_animated animate_fadeInRight',
      leaveClass: 'animate_animated animate_fadeOutLeft',
    },
  },
  {
    path: '/SellIt',
    name: 'sellIt',
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SellIt" */ '../views/SellIt.vue'),
    meta: {
      enterClass: 'animate_animated animate_fadeInLeft',
      leaveClass: 'animate_animated animate_fadeOutRight',
    },
  },
  {
    path: '/Farm',
    name: 'Farm',
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Farm" */ '../views/FarmView.vue'),
    meta: {
      enterClass: 'animate_animated animate_fadeInLeft',
      leaveClass: 'animate_animated animate_fadeOutRight',
    },
  },
  {
    path: '/Butcher',
    name: 'Butcher',
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Butcher" */ '../views/ButcherTeam.vue'),
    meta: {
      enterClass: 'animate_animated animate_fadeInLeft',
      leaveClass: 'animate_animated animate_fadeOutRight',
    },
  },
  {
    path: '/Blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Blog" */ '../views/BlogPost.vue'),
    meta: {
      enterClass: 'animate_animated animate_fadeInLeft',
      leaveClass: 'animate_animated animate_fadeOutRight',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
