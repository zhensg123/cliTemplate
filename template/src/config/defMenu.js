/*
* 层级关系书写方式为：
* 子级的ParentCode等于父级的ResourceCode
* 子级的ResourceCode为父级的ResourceCode后面加01,02
* 子级的Depth为父级的Depth+1
* 同级元素以OrderValue排序，小的在前
* 第一级有IconUrl属性
*
* */
export default [
  {
    ResourceCode: '1',
    ResourceName: 'Dashboard',
    OrderValue: 1,
    Depth: 1, // 当前层级
    ParentCode: '',
    ResourceUrl: '/',
    index: '1',
    IconUrl: 'icon-yingyong',
    children: []
  },
  {
    ResourceCode: '2',
    ResourceName: '列表页',
    OrderValue: 1,
    Depth: 1, // 当前层级
    ParentCode: '',
    ResourceUrl: '',
    index: '2',
    IconUrl: 'icon-yingyong',
    children: [
      {
        ResourceCode: '201',
        ResourceName: '搜索列表页',
        OrderValue: 1,
        Depth: 2, // 当前层级
        ParentCode: '2',
        ResourceUrl: '/list/search',
        index: '201',
        children: []
      }
    ]
  },
  {
    ResourceCode: '3',
    ResourceName: '表单页',
    OrderValue: 1,
    Depth: 1, // 当前层级
    ParentCode: '',
    ResourceUrl: '',
    index: '3',
    IconUrl: 'icon-yingyong',
    children: [
      {
        ResourceCode: '301',
        ResourceName: '基础表单页',
        OrderValue: 1,
        Depth: 2, // 当前层级
        ParentCode: '3',
        ResourceUrl: '/form/base-form',
        index: '301',
        children: []
      }
    ]
  }
]
