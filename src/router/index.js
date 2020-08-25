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
    path: '/fnaf-franchise',
    name: "Five Night at Freddy's Franchise",
    component: () => import('../views/FNaF_Franchise.vue')
  },
  {
    path: '/other-games',
    name: "Other Games",
    component: () => import('../views/Other_Games.vue')
  },
  {
    path: '/troll-games',
    name: "Troll Games",
    component: () => import('../views/Troll_Games.vue')
  },
  // FNAF Franchise
  {
    path: '/fnaf1',
    name: "Five Night at Freddy's",
    component: () => import('../views/games/fnaf-franchise/Fnaf1.vue')
  },
  {
    path: '/fnaf2',
    name: "Five Night at Freddy's 2",
    component: () => import('../views/games/fnaf-franchise/Fnaf2.vue')
  },
  {
    path: '/fnaf3',
    name: "Five Night at Freddy's 3",
    component: () => import('../views/games/fnaf-franchise/Fnaf3.vue')
  },
  {
    path: '/fnaf4',
    name: "Five Night at Freddy's 4",
    component: () => import('../views/games/fnaf-franchise/Fnaf4.vue')
  },
  {
    path: '/fnafsl',
    name: "Five Night at Freddy's: Sister Location",
    component: () => import('../views/games/fnaf-franchise/Fnaf5_SL.vue')
  },
  {
    path: '/fnafworld',
    name: "FNaF World",
    component: () => import('../views/games/fnaf-franchise/FnafWorld.vue')
  },
  {
    path: '/ffps',
    name: "Freddy Fazbear's Pizzeria Simulator",
    component: () => import('../views/games/fnaf-franchise/Fnaf6_FFPS.vue')
  },
  {
    path: '/ucn',
    name: "Ultimate Custom Night",
    component: () => import('../views/games/fnaf-franchise/Fnaf7_UCN.vue')
  },
  {
    path: '/fnafvrhw',
    name: "Five Night at Freddy's VR: Help Wanted",
    component: () => import('../views/games/fnaf-franchise/Fnaf8_VR-HW.vue')
  },
  {
    path: '/fis2',
    name: "Freddy in Space 2",
    component: () => import('../views/games/fnaf-franchise/FiS2.vue')
  },
  {
    path: '/fnafsb',
    name: "Five Night at Freddy's Security Breach",
    component: () => import('../views/games/fnaf-franchise/Fnaf9_SB.vue')
  },
  // Other games
  {
    path: '/lof1',
    name: "Legacy of Flan",
    component: () => import('../views/games/other/Lof1.vue')
  },
  {
    path: '/lofonline',
    name: "Legacy of Flan: Online",
    component: () => import('../views/games/other/Lof2_Online.vue')
  },
  {
    path: '/lofsoh',
    name: "Legacy of Flan: Storm of Hades",
    component: () => import('../views/games/other/Lof3_SoH.vue')
  },
  {
    path: '/sg',
    name: "Stellar Gun",
    component: () => import('../views/games/other/StellarGun.vue')
  },
  // Troll games
  {
    path: '/ucndemo',
    name: "Ultimate Custom Night Demo",
    component: () => import('../views/games/troll/UCN_Demo.vue')
  },
  {
    path: '/slma',
    name: "Sister Location: MA",
    component: () => import('../views/games/troll/SisterLocation_MA.vue')
  },
  {
    path: '/fnaf3-tg',
    name: "Five Night at Freddy's 3",
    component: () => import('../views/games/troll/Fnaf3_TG.vue')
  },
  {
    path: '/fnafworld-he',
    name: "FNaF World: Halloween Edition",
    component: () => import('../views/games/troll/FnafWorld_HE.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
