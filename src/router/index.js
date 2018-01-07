import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro/Component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    }
  ]
})
