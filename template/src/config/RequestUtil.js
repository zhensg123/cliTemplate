import axios from 'axios'
var qs = require('qs')

// 封装ajax get 异步访问，传入参数{'url':'数据传输地址','params':'数据参数json对象'}
export const ajaxGetData = dataParams => {
  return axios.get(dataParams.url, { params: dataParams.params })
}

// 封装ajax post 异步访问，传入参数{'url':'数据传输地址','params':'数据参数json对象'}
export const ajaxPostData = dataParams => {
  return axios.post(dataParams.url, qs.stringify(dataParams.params))
}
