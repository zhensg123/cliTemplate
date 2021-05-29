let routes = [
  {
    name: 'search',
    path: '/list/search',
    component: () => import('@/pages/list/search/index'),
    meta: {breadcrumb: [{title: '列表'}, {title: '搜索列表'}]}
  }]
export default routes
