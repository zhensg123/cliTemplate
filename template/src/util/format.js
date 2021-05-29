// 验证类别对象
const typeObj = {
  isNull: function (str) {
    if (!str || str.length <= 0) {
      return true
    }
    return false
  },
  disVar: function (str) {
    const reg = /^\w+$/g
    return !reg.test(str)
  },
  disVarAndot: function (str) {
    const reg = /^\w+[.\w]*$/g
    return !reg.test(str)
  },
  hasBlank: function (str) {
    const reg = /^\s+$/g
    return reg.test(str)
  },
  disPath: function (str) {
    const reg = /^\/([\w-]+\/?)*$/g
    return !reg.test(str)
  },
  disPath2: function (str) {
    const reg = /^\/([\w-.]+\/?)*$/g
    return !reg.test(str)
  },
  disDomain: function (str) {
    const reg = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
    return !reg.test(str)
  },
  disIp: function (str) {
    const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/
    return !reg.test(str)
  },
  disUrl: function (str) {
    var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
    return !reg.test(str)
  },
  disNumber: function (str) {
    const reg = /^[1-9][0-9]*$/g
    return !reg.test(str)
  },
  disIpAndDomain: function (str) {
    return this.disIp(str) && this.disDomain(str)
  },
  disApi: function (str) {
    const reg = /^[a-zA-Z][a-zA-Z0-9]*$/g
    return !reg.test(str)
  },
  extraLen: function (str, len) {
    return str.length > len
  }
}

function validate () {
  this.validateArr = []
}
// type是验证类别,variable是变量，tip是提示内容
validate.prototype.add = function (type, variable, tip, extraArg) {
  this.validateArr.push(() => {
    if (typeObj[type](variable, extraArg)) {
      return tip
    }
  })
}
validate.prototype.map = function () {
  for (let i = 0, fn = this.validateArr[0]; fn; i++) {
    if (fn()) {
      return fn()
    }
    fn = this.validateArr[i]
  }
}

export default validate
