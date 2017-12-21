import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import firebase from 'firebase'
import addadmin from '@/components/addadmin'
import Addusercredit from '@/components/Add_user_credit'
import EarningsRevenue from '@/components/Earnings_Revenue'
import home1 from '@/components/home1'
import Addcredit1 from '@/components/Addcredit1'
import addadmin1 from '@/components/addadmin1'
import EarningsRevenue1 from '@/components/Earnings_Revenue1'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addadmin',
      name: 'addadmin',
      component: addadmin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Add_user_credit',
      name: 'Add_user_credit',
      component: Addusercredit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Earnings_Revenue',
      name: 'Earnings_Revenue',
      component: EarningsRevenue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Earnings_Revenue1',
      name: 'Earnings_Revenue1',
      component: EarningsRevenue1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home1',
      name: 'home1',
      component: home1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Addcredit1',
      name: 'Addcredit1',
      component: Addcredit1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addadmin1',
      name: 'addadmin1',
      component: addadmin1,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home1')
  else next()
})

export default router
