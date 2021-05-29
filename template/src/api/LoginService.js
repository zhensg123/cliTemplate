import { ajaxPostData } from '@/config/RequestUtil'

const opsservice = 'http://' + process.env.VUE_APP_baseservice_domain + '/baseservice'

const loginAjax = {
  getLoginInfoByTokenId (params) {
    return ajaxPostData({ url: `${opsservice}/loginAuth/getLoginInfoByTokenId`, params: params })
  },
  requestLoginOut (params) {
    return ajaxPostData({ url: `${opsservice}/loginAuth/loginOut`, params: params })
  }
}

export default loginAjax
