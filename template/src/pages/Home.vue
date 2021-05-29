<template>
  <div class="home">
    <cloud-common projectName="云平台" :activeDefault='activeDefault' :menuTree="menuTree" :isCloud="true" isStandard="true"></cloud-common>
    <div class="article">
      <section :style="{marginLeft:isCollapse?'64px':'204px'}">
        <div style="margin-top: 10px;">
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import loginAjax from '@/api/LoginService'
import menuList from '@/config/defMenu'
export default {
  name: 'home',
  data () {
    return {
      isCollapse: false,
      menuTree: [],
      activeDefault: ''
    }
  },
  methods: {
    addBus () {
      this.$bus.$on('changeCollapse', (val) => {
        this.isCollapse = val
      })
      this.$bus.$on('loginOut', () => {
        loginAjax.requestLoginOut().then(() => {
          localStorage.removeItem('LoginUserInfo')
          this.$notify({ title: '信息', message: '退出成功', type: 'success' })
          let ssoLoginOutUrl = 'http://' + process.env.sso_domain + '/logout'
          let clientDomain = process.env.client_domain
          if (process.env.NODE_ENV === 'development') {
            let port = window.location.port
            if (port !== '') {
              clientDomain += ':' + port
            }
          }
          ssoLoginOutUrl += '?service=http://' + clientDomain
          window.location = ssoLoginOutUrl
        })
      })
    }
  },
  mounted () {
    this.addBus()
    this.menuTree = menuList
  }
}

</script>
<style scoped lang="scss">
  .home {
    height: 100%;
  }
  .article {
    height: 100%;
    margin-top: 50px;
    section {
      margin-left: 204px;
      min-width: 1048px;
      transition: all .4s;
      position: absolute;
      top: 50px;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
</style>
