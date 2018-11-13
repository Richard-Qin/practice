export default [, {
    path: '/personal-center',
    name: 'personalCenter',
    component: () => import( /* webpackChunkName: "index" */ '@/pages/personal-center/index') // 入口文件
  },
  {
    path: '/components',
    name: 'tabBar',
    component: TabBar
  }
]
