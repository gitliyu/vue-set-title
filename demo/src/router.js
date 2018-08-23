import Vue from 'vue'
import Router from 'vue-router'
import setTitle from 'vue-set-title'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Eat',
      component: require('./views/Eat.vue').default,
      meta: {
        title: '吃饭'
      }
    },
    {
      path: '/sleep',
      name: 'Sleep',
      component: require('./views/Sleep.vue').default,
      meta: {
        title: '睡觉'
      }
    },
    {
      path: '/fight',
      name: 'Fight',
      component: require('./views/Fight.vue').default,
      meta: {
        title: '打豆豆'
      }
    }
  ]
})

Vue.use(setTitle, router)

export default router
