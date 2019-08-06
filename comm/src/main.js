// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index';
import City from './components/city';
import Kezhao from './components/kezhao';
import Fashion from './components/fashion'
import CityLp from './components/cityLp'
import Chinese from './components/chinese'
import French from './components/french'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {Carousel, CarouselItem} from 'element-ui';
import './rem/rem';


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App, Header, Footer, Index, City, Kezhao, Fashion, CityLp, Chinese, French},
  template: '<App/>',
  render: h => h(App),
})



