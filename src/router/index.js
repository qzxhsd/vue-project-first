import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue'),
    hidden: true
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../components/NotFound.vue'),
    hidden: true
  },
  {
    path: '/home',
    redirect: '/home/student',
    name: '学生管理',
    component: () => import('../components/Home.vue'),
    children: [
      {
        path: '/home/student',
        name: '学生列表',
        component: () => import('../components/student/studentList.vue')
      },
      {
        path: '/home/work',
        name: '作业列表',
        component: () => import('../components/student/workList.vue')
      },
      {
        path: '/home/info',
        name: '信息列表',
        component: () => import('../components/student/infoList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
