# Vue-set-title

通过修改`vue-router`配置，在切换路由时修改页面title，兼容了ios和微信

Demo: ['vue-set-title'](https://www.liyu.fun/vue-set-title)
Demo源码: ['demo'](https://github.com/gitliyu/vue-set-title/tree/master/demo)

安装
```
npm i vue-set-title
```

在`router.js`中引入，在路由配置的`meta`属性中设置`title`，最后使用`Vue.use`调用，如下 
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import setTitle from 'vue-set-title';

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index'，
      components: require('@/views/IndexPage').default,
      meta: {
        title: '主页'
      }
    }
  ]
})


/*
 * params
 * router: Router实例
 * title: 未设置时默认的title值
 * */
Vue.use(setTitle, router, 'title')

export default router

```

required: `vue`  `vue-router`
