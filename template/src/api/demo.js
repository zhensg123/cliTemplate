import { ajaxGetData, ajaxPostData, ajaxDeleteData, ajaxPostJson } from '@/config/ajaxService'
const menuUrl = process.env.VUE_APP_menuUrl
const gatewayApi = process.env.VUE_APP_gateway
const demoAjax = {
  getMenutree (params) { // 获取公共导航的左侧菜单部分接口
    return ajaxGetData({ url: `${menuUrl}/apis/getMenutreeByResourceCode`, params: params })
  },
  apiModify: params => { // api修改
    return ajaxPostJson({ url: `${gatewayApi}/rest/api/modify`, params: params })
  },
  apiDetailQuery: params => { // api详情查询
    return ajaxGetData({ url: `${gatewayApi}/rest/api/query`, params: params })
  },
  apiDelete: params => { // 删除api
    const id = params.id
    return ajaxDeleteData({ url: `${gatewayApi}/rest/api/delete/${id}`, params: {} })
  },
  getGroupListPage: params => { // 搜索分组
    return ajaxPostData({ url: `${gatewayApi}/rest/group/getGroupListPage`, params: params })
  }
}
export { demoAjax }
