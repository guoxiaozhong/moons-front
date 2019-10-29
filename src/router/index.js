import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

const test = r => require.ensure([], () => r(require('@/views/test/test')), 'test')
const content = r => require.ensure([], () => r(require('@/views/home-content')), 'content')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'welcome',
      children: [{
        path: '/welcome',
        name: 'content',
        component: content,
        meta: {
          keepAlive: true,
          requiresAuth: true
        }
      }, {
        path: '/test',
        name: 'test',
        component: test,
        meta: {
          keepAlive: true,
          requiresAuth: true
        }
      }
      ]
    }
  ]
})
