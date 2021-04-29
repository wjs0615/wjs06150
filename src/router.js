/*
 * @Author: your name
 * @Date: 2021-04-28 15:04:39
 * @LastEditTime: 2021-04-28 15:28:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home-1\src\router.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
    ,{
      path: '/wjs',
      name: 'wjs',
      component: () => import('./views/wjs.vue')
    }
  ]
})
