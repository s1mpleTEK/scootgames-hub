import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fnaf1',
    name: "Five Night at Freddy's",
    component: () => import('../views/fnaf-license/Fnaf1.vue')
  },
  {
    path: '/fnaf2',
    name: "Five Night at Freddy's 2",
    component: () => import('../views/fnaf-license/Fnaf2.vue')
  },
  {
    path: '/fnaf3',
    name: "Five Night at Freddy's 3",
    component: () => import('../views/fnaf-license/Fnaf3.vue')
  },
  {
    path: '/fnaf4',
    name: "Five Night at Freddy's 4",
    component: () => import('../views/fnaf-license/Fnaf4.vue')
  },
  {
    path: '/fnafsl',
    name: "Five Night at Freddy's: Sister Location",
    component: () => import('../views/fnaf-license/Fnaf5_SL.vue')
  },
  {
    path: '/fnafworld',
    name: "FNAF World",
    component: () => import('../views/fnaf-license/FnafWorld.vue')
  },
  {
    path: '/ffps',
    name: "Freddy Fazbear's Pizzeria Simulator",
    component: () => import('../views/fnaf-license/Fnaf6_FFPS.vue')
  },
  {
    path: '/ucn',
    name: "Ultimate Custom Night",
    component: () => import('../views/fnaf-license/Fnaf7_UCN.vue')
  },
  {
    path: '/fnafvrhw',
    name: "Five Night at Freddy's VR: Help Wanted",
    component: () => import('../views/fnaf-license/Fnaf8_VR-HW.vue')
  },
  {
    path: '/fis2',
    name: "Freddy in Space 2",
    component: () => import('../views/fnaf-license/FiS2.vue')
  },
  {
    path: '/fnafsb',
    name: "Five Night at Freddy's Security Breach",
    component: () => import('../views/fnaf-license/Fnaf9_SB.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
