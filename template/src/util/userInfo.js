import Vue from 'vue'
const userInfo = {
  getLoginUser () {
    return JSON.parse(localStorage.getItem('LoginUserInfo'))
  },
  setLoginUser (dataParams) {
    const timestamp = Date.parse(new Date())
    // 加入登录时间
    dataParams.loginTimestamp = timestamp

    let isSuperAdmin = false
    const permissons = {}
    const roles = {}
    const teamRoles = {}
    const teamPermissons = {}
    for (let a = 0; a < dataParams.systemInfo.length; a++) {
      if (dataParams.systemInfo !== undefined && dataParams.systemInfo.length > 0) {
        // 循环角色信息
        const sysroles = dataParams.systemInfo[a].roles
        for (let m = 0; m < sysroles.length; m++) {
          const roleKey = sysroles[m].key
          roles[sysroles[m].key] = 'ok'
          const permissonArry = sysroles[m].permisson
          // 如果角色包含superadmin则把用户标记为超管
          if (roleKey === 'superadmin') {
            isSuperAdmin = true
          }
          for (let k = 0; k < permissonArry.length; k++) {
            permissons[permissonArry[k].key] = 'ok'
          }
        }
      }
    }

    const teams = dataParams.teams
    for (let i = 0; i < teams.length; i++) {
      const team = teams[i]
      const tRoles = team.role

      for (let m = 0; m < tRoles.length; m++) {
        if (!tRoles[m]) { continue }
        const roleKey = tRoles[m].key
        teamRoles[team.id + ':' + roleKey] = 'ok'
        teamRoles[roleKey] = 'ok'
        const tPermissons = tRoles[m].permisson
        for (let k = 0; k < tPermissons.length; k++) {
          teamPermissons[team.id + ':' + tPermissons[k].key] = 'ok'
          teamPermissons[tPermissons[k].key] = 'ok'
        }
      }
    }

    dataParams.isSuperAdmin = isSuperAdmin
    dataParams.permissons = permissons
    dataParams.roles = roles
    dataParams.teamRoles = teamRoles
    dataParams.teamPermissons = teamPermissons
    localStorage.setItem('LoginUserInfo', JSON.stringify(dataParams))
    Vue.prototype.$me = JSON.parse(JSON.stringify(dataParams))
  },
  isTimeout (LoginUserInfo) {
    // 当前登录时间
    const nowTimestamp = Date.parse(new Date())
    if (!LoginUserInfo) {
      return true
    }
    // 上次登录时间
    const lastTimestamp = LoginUserInfo.loginTimestamp

    // 超时2小时
    if ((nowTimestamp - lastTimestamp) / 1000 / 60 / 60 > 2) {
      // 如果超时删除缓存
      localStorage.removeItem('LoginUserInfo')
      return true
    } else {
      // 未超时
      return false
    }
  }
}
export default userInfo
