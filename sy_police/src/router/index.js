import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const NoFind = () => import('../views/NoFind.vue')

const AgencyIndex = () => import('../views/agency/Index.vue')
const AgencyEdit = () => import('../views/agency/Edit.vue')
const AgencyDetail = () => import('../views/agency/Detail.vue')


const StudentIndex = () => import('../views/student/Index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'agency/index',
        name: 'AgencyIndex',
        component: AgencyIndex,
      },
      {
        path: 'agency/edit',
        name: 'AgencyEdit',
        component: AgencyEdit,
      },
      {
        path: 'agency/detail',
        name: 'AgencyDetail',
        component: AgencyDetail,
      },
      {
        path: 'student/index',
        name: 'StudentIndex',
        component: StudentIndex,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: 'NoFind',
    component: NoFind
  }, {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
