let routes = [
  {
    path: '/dashBoard',
    name: 'dashBoard',
    component: () => import('@/pages/dashBoard/index'),
    meta: {breadcrumb: [{
      title: '总览'
    }]}
  }
]
export default routes
