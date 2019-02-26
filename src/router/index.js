// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LoginLayout from '@/views/layout/LoginLayout'
import MainLayout from '@/views/layout/MainLayout'
import HeaderLayout from '@/views/layout/headerlayout'
// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/401',
//       component: () => import('@/views/error/401')
//     },
//     {
//       path: '/404',
//       component: () => import('@/views/error/404')
//     },
//     {
//       path: '*',
//       redirect: '/404'
//     }
//   ]
// })
export const staticRoutes = [
  // {
  //   path: '/HelloWorld',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // },
  {
    path: '/401',
    component: () => import('@/views/error/401')
  },
  {
    path: '/404',
    component: () => import('@/views/error/404')
  },
  // {
  //   path: '*',
  //   redirect: '/404'
  // },
  {
    path: '',
    component: LoginLayout,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login')
      }
    ]
  },
  {
    path: '/forgetPassword',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'forgetPassword',
        component: () => import('@/views/forgetpassword/ForgetPassword')
      }
    ]
  },
  {
    path: '/register',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'register',
        component: () => import('@/views/register/Register')
      }
    ]
  },
  {
    path: '/socialWorker',
    name: 'socialWorker',
    component: () => import('@/views/socialWorker/socialWorker')
  },
  {
    path: '/institutions',
    name: 'institutions',
    component: () => import('@/views/institutions/institutions')
  }
]
export const dynamicRoutes = [
  {
    path: '/header',
    component: HeaderLayout,
    // redirect: '/myProject',
    children: [
      {
        path: '/myProject1',
        component: MainLayout,
        meta: {
          title: '继续教育',
          icon: 'icon-ic_dashboard',
          disabled: false
        },
        children: [
          {
            path: '/home1',
            name: 'home1',
            title: '继续教育',
            component: () => import('@/views/home/home')
          }
        ]
      },
      {
        path: '/myProject',
        component: MainLayout,
        meta: {
          title: '个人中心',
          icon: 'icon-ic_dashboard',
          disabled: false
        },
        children: [
          {
            path: '/home2',
            name: 'home2',
            component: () => import('@/views/home/home')
          }
        ]
      }
    ]
  },
  {
    path: '/list',
    component: () => import('@/views/login/list')
  },
   {
    path: '*',
    redirect: '/404'
  }
]
