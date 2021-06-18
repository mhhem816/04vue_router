import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import brand from '../components/brand.vue'
import shop from '../components/shop.vue'
import event from '../components/event.vue'
import review from '../components/review.vue'

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/brand",
    component: brand,
  },
  {
    path: "/shop",
    component: shop,
  },
  {
    path: "/event",
    component: event,
  },
  {
    path: "/review",
    component: review,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
