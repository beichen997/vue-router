// 路由拦截
// import router from './index'
import { staticRoutes, dynamicRoutes } from './index'
import store from '../store'
import {
  getToken
} from '@/utils/auth' // 验权
import 'nprogress/nprogress.css' // 进度条
import NProgress from 'nprogress' // 进度调样式
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router = new Router({ routes: staticRoutes })
NProgress.configure({
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  // console.log(to,'to',from,'form',next,'next')
  // if(to.name){
  //   store.commit('CHANGE_PATH', to.name);
  // }
  // console.log(store.state.user.id, 'id')
  if(sessionStorage.getItem('router')){
    if (to.path === '/login') {
      next()
    } else {
      // next()
        if (!store.state.user.id) {
          // let routes= JSON.parse(sessionStorage.getItem('router'));
          store.dispatch('Change', 'qwe')
          router.addRoutes(dynamicRoutes)
          // console.log(router)
          console.log(2)
          // next()
          next({ ...to, replace: true })
        } else {
          console.log(5)
          console.log(getToken(), router)
          next()
        }
      // }
     
    }
  } else {
    next()
    // router.push({path:'/login'})
    NProgress.done()

  }
 
  // if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
  //   if (getToken()) { // 判断token是否存在
  //     next()
  //   } else {
  //     router.push({
  //       path: '/login'
  //     })
  //   }
  // } else if (to.path === '/login') {
  //   next()
  // } else {
  //   next()
  //   NProgress.done()
  // }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
