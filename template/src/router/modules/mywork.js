export default [{
  path: '/mywork/pure-mywork',
  name: 'mywork',
  title: '拉人入伙',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/pure-mywork.vue')
}, {
  path: '/mywork/deep-clone',
  name: 'mywork',
  title: '制定目标',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/deep-clone.vue')
}, {
  path: '/mywork/self-map',
  name: 'mywork',
  title: '执行下去',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/self-map.vue')
}, {
  path: '/mywork/self-new',
  name: 'mywork',
  title: '监督执行',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/self-new.vue')
}]

// self-jsonstringify self-new  create-js  closure  instanceof  promise-chunk  for-in-break  mywork-currying  self-setinterval

