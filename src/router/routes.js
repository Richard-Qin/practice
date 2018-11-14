export default [{
    path: '/home-page',
    name: 'home_page',
    component: () => import('@/pages/home-page/index') /* 主页 */
  },
  {
    path: '/bookrack',
    name: 'bookrack',
    component: () => import('@/pages/bookrack/index') /* 书架 */
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/pages/message/index') /* 消息 */
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/pages/community/index') /* 消息 */
  },
  {
    path: '/personal-center',
    name: 'personalCenter',
    component: () => import('@/pages/personal-center/index') /* 个人中心 */
  },
  {
    path: '/personal-setting',
    name: 'personal_setting',
    component: () => import('@/pages/personal-center/personal-setting/index') /* 个人设置 */
  }
]
