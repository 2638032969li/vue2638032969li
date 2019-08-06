import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import City from '../components/city'
import Index from '../components/index'
import Kezhao from '../components/kezhao'
import Fashion from '../components/fashion'
import CityLp from '../components/cityLp'
import Chinese from '../components/chinese'
import French from '../components/french'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/C',
      name: 'City',
      component: City
    },
    {
      path: '/K',
      name: 'Kezhao',
      component: Kezhao
    },
    {
      path: '/Fa',
      name: 'Fashion',
      component: Fashion
    },
    {
      path: '/Lp',
      name: 'CityLp',
      component: CityLp
    },
    {
      path: '/Ch',
      name: 'Chinese',
      component: Chinese
    },
    {
      path: '/Fn',
      name: 'French',
      component: French
    }
  ]
})
