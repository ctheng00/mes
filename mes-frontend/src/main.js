import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/pages/Home'
import Production from '@/pages/Product'
import QualityControl from '@/pages/QualityControl'

import store from './store'

import '@/assets/css/tailwind.css'


Vue.config.productionTip = false

Vue.use(Router)

const routes = [
  { path: '/', redirect: { name: 'DashboardHome' } },
  { path: '/dashboard', component: Dashboard, children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome },
      { path: '/production', name: 'Production', component: Production },
      { path: '/quality-control', name: 'QualityControl', component: QualityControl },
    ]
  },
  { path: '/', redirect: { name: 'DashboardHome' } },
]

const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

