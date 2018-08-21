export default {
  /*
  * params
  * Vue: Vue实例
  * Router: Router实例
  * title: 未设置时默认的title值
  * */
  install: function (Vue, Router, title) {
    Router.beforeEach((to, from, next) => {
      this.setTitle(to.meta.title, title);
      next()
    });
  },
  /*
   * params
   * title: 设置的title属性
   * defaultTitle: 未设置时默认的title值
   * */
  setTitle: (title, defaultTitle) => {
    let pageTitle = title || defaultTitle;
    // 直接修改文档title
    document.title = pageTitle;
    // ios的微信端，使用iframe修改title
    let userAgent = window.navigator.userAgent.toLowerCase();
    let isiOS = userAgent.indexOf('applewebkit') >= 0;
    let isWechat = userAgent.indexOf('micromessenger') >= 0;
    if (isiOS && isWechat) {
      let iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      iframe.onload = () => {
        setTimeout(() => {
          iframe.remove();
        }, 0)
      };
    }
  }
}