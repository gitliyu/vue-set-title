export default {
  /**
   * @param Vue Vue实例
   * @param Router Router实例
   * @param defaultTitle 未设置时默认的title值
   */
  install: function (Vue, Router, defaultTitle) {
    var _this = this;
    Router.beforeEach(function(to, from, next) {
      const title = typeof to.meta.title === 'function' ? to.meta.title() : to.meta.title;
      _this.setTitle(title, defaultTitle);
      next()
    });
  },
  /**
   * @param title 设置的title属性
   * @param defaultTitle 未设置时默认的title值
   */
  setTitle: function (title, defaultTitle) {
    var pageTitle = title || defaultTitle;
    // 直接修改文档title
    document.title = pageTitle;
    // ios的微信端，使用iframe修改title
    var userAgent = window.navigator.userAgent.toLowerCase();
    var isiOS = userAgent.indexOf('applewebkit') >= 0;
    var isWechat = userAgent.indexOf('micromessenger') >= 0;
    if (isiOS && isWechat) {
      var iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      iframe.onload = function () {
        setTimeout(function(){
          iframe.remove();
        }, 0)
      };
    }
  }
}
