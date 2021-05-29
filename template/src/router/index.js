import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import E403 from '@/pages/E403'
import E404 from '@/pages/E404'
import form from '@/router/form'
import list from '@/router/list'
import dashBoard from '@/router/dashBoard'
import loginAjax from '@/api/LoginService'
import userInfo from '@/util/userInfo'
Vue.use(Router)
const childrenList = [...dashBoard, ...form, ...list]

const router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/dashBoard',
    children: [
      ...childrenList, {
        path: '/error',
        name: 'E403',
        component: E403
      }]
  }, {
    path: '*',
    name: 'E404',
    component: E404
  }],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

function returnLoginPage () {
  let ssoUrl = 'http://' + process.env.VUE_APP_sso_domain + '/login?service=http://' + process.env.VUE_APP_baseservice_domain + '/baseservice/loginAuth/loginOAAuthentication'
  let clientDomain = process.env.VUE_APP_client_domain
  if (process.env.VUE_APP_NODE_ENV === 'development') {
    const port = location.port
    if (port !== '') {
      clientDomain += ':' + port
    }
  }
  ssoUrl += '?clienturl=' + clientDomain
  location = ssoUrl
}

// 页面不存在跳转到错误页面
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0 && to.path !== '/ssologin') {
    next('/error')
  }
  if (to.path === '/ssologin') {
    loginAjax.getLoginInfoByTokenId({ tokenId: to.query.tokenId }).then(res => {
      const data = res.data
      if (data.status === true) {
        userInfo.setLoginUser(data)
        const fromPath = localStorage.getItem('fromPath')
        localStorage.removeItem('fromPath')
        next({ path: fromPath || '/' })
      } else {
        returnLoginPage()
      }
    })
  } else {
    const user = userInfo.getLoginUser()
    // 如果有当前用户
    if (user) {
      if (userInfo.isTimeout(user)) {
        // 超时处理
        localStorage.removeItem('LoginUserInfo')
        next({ path: to.fullPath })
      } else {
        next()
      }
    } else {
      localStorage.setItem('fromPath', to.fullPath)
      returnLoginPage()
    }
  }
})
export default router
