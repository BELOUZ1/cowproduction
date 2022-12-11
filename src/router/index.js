import Vue from 'vue'
import VueRouter from 'vue-router'
import CowRecording from '../views/CowRecording.vue'
import MedicalExamination from '../views/MedicalExamination.vue'
import BirthRegistration from '../views/BirthRegistration.vue'
import MilkProduction from '../views/MilkProduction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/medicalexamination',
    name: 'medicalexamination',
    component: MedicalExamination
  },
  {
    path: '/birthregistration',
    name: 'birthregistration',
    component:  BirthRegistration
  },
  {
    path: '/milkproduction',
    name: 'milkproduction',
    component:  MilkProduction
  },
  {
    path: '/cowrecording',
    name: 'cowrecording',
    component: CowRecording
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
