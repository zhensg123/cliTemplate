let routes = [
  {
    name: 'base-form',
    path: '/form/base-form',
    component: () => import('@/pages/form/baseForm/index'),
    meta: {breadcrumb: [{title: '表单'}, {title: '基础表单'}]}
  }]
export default routes
