import Vue from 'vue'
import Router from 'vue-router'
import personalCenter from '@/pages/personal-center/index'
import TabBar from '@/components/tabbar'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/personal-center',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/components',
      name: 'tabBar',
      component: TabBar
    }
  ]
})
