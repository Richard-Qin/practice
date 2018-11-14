import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import personalCenter from '@/pages/personal-center/index'
// import TabBar from '@/components/tabbar'

Vue.use(Router)

let _router = new Router({
  routes
})

export default _router



// export default new Router({
//   routes: [{
//       path: '/personal-center',
//       name: 'personalCenter',
//       component: personalCenter
//     },
//     {
//       path: '/components',
//       name: 'tabBar',
//       component: TabBar
//     }
//   ]
// })
