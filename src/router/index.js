import Vue from 'vue'
import Router from 'vue-router'
import InitialPage from '@/components/InitialPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InitialPage',
      component: InitialPage
    }
  ]
})
