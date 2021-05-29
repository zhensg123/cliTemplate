/* eslint-disable */
// https://git.corpautohome.com/gp_rd_fe_pc/zixun/blob/master/src/widget/topbar/js/auto-header.js#L82

function getCookie(name, defval) {
    var nameEq = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEq) === 0) {
        return decodeURIComponent(c.substring(nameEq.length, c.length));
      }
    }
    return typeof defval === 'undefined' ? '' : defval;
  }
  
  function setCookie(name, value, option) {
    var str = name + '=' + encodeURIComponent(value);
    if (option) {
      if (option.expireHours) {
        var d = new Date();
        d.setTime(d.getTime() + option.expireHours * 3600 * 1000);
        str += '; expires=' + d.toGMTString();
      }
      if (option.path) {
        str += '; path=' + option.path;
      } else {
        str += '; path=/';
      }
      if (option.domain) {
        str += '; domain=' + option.domain;
      }
      if (option.secure) {
        str += '; true';
      }
    }
    document.cookie = str;
  }
  
  function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name, null);
    if (cval !== '') {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }
  }
  
  export { getCookie, setCookie, delCookie };
  