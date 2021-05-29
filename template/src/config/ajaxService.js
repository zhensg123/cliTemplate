import axios from 'axios'
import { Message } from 'element-ui'
import userInfo from '@/util/userInfo'

const qs = require('qs')
// let Base64 = require('js-base64').Base64
// let bauth = 'Basic ' + Base64.encode('auto_cloud:qaz@#$<>?075')
const myAjax = axios.create()

const dealWarn = (responseData) => {
  Message({
    message: responseData.error || responseData.message,
    type: 'warning'
  })
  return Promise.reject(responseData)
}

const dealCode = (response) => {
  const code = response.data.code
  const success = response.data.success
  const status = response.status
  console.log(response, 9090)
  if (status !== 200 && status !== 201) {
    const responseData = response.data
    return dealWarn(responseData)
  }
  if (code !== undefined && code !== 1 && code !== 200 && code !== 10000) {
    if (code === 401) {
      location.href = `${location.origin}/#/error?type=auth`
    }
    const responseData = response.data
    return dealWarn(responseData)
  }
  if (success !== true && success !== undefined) {
    const responseData = response.data
    return dealWarn(responseData)
  }
  return response
}

export const ajaxGetData = dataParams => {
  return myAjax.get(dataParams.url, { params: dataParams.params })
}
export const ajaxDeleteData = dataParams => {
  return myAjax.delete(dataParams.url, { params: dataParams.params })
}
export const ajaxPutData = dataParams => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return myAjax.put(dataParams.url, dataParams.params, axiosConfig)
}
export const ajaxDeleteJsonData = (url, dataParams) => {
  return myAjax({
    url: url,
    method: 'delete',
    params: dataParams.params,
    data: dataParams.dataBody,
    headers: { 'Content-Type': 'application/json' }
  })
}
export const ajaxPostData = dataParams => {
  return myAjax.post(dataParams.url, qs.stringify(dataParams.params))
}
export const ajaxPostJson = dataParams => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return myAjax.post(dataParams.url, dataParams.params, axiosConfig)
}
/**
 * 全部请求拦截器处理
 */
myAjax.interceptors.request.use(function (config) {
  const LoginUser = userInfo.getLoginUser()
  if (LoginUser !== undefined) {
    if (config.params === undefined) {
      config.params = {}
    }
    config.params.tokenId = LoginUser.tokenId
  }
  // config.headers['Authorization'] = bauth
  return config
},
function (error) { return Promise.reject(error) }
)

/**
 * 响应拦截器
 */
myAjax.interceptors.response.use(response => {
  return dealCode(response)
}, error => {
  Message({
    message: '接口或网络异常',
    type: 'error'
  })
  return Promise.reject(error)
})
