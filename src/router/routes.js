export default [{
    path: '/personal-center',
    name: 'personalCenter',
    component: () => import('@/pages/personal-center/index') /* 个人中心 */
  },
  {
    path: '/personal-setting',
    name: 'personal_setting',
    component: () => import('@/pages/personal-center/personal-setting/index')
  }
]
