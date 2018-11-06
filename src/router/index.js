import Vue from 'vue'
import Router from 'vue-router'
import GoodsView from '../components/GoodsView.vue'
import DiscoverView from '../components/DiscoverView.vue'
import StudyView from '../components/StudyView.vue'
import SellerView from '../components/SellerView.vue'
import Transmit from '../widget/Transmit.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Goods',
      component: GoodsView
    },
    {
      path: '/discover',
      name: 'Discover',
      component: DiscoverView
    },
    {
      path: '/study',
      name: 'Study',
      component: StudyView
    },
    {
      path: '/seller',
      name: 'Seller',
      component: SellerView
    },
    {
      path: '/transmit',
      name: 'Transmit',
      component: Transmit
    }
  ],
  linkActiveClass: 'active'
})
