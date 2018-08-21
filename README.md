# Vue-set-title

Personal preset sass package

Install
```
npm i vue-set-title
```

Introduce in router.js 
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