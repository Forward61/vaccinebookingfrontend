import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VaccineBooking from "../components/VaccineBooking";
import VaccineBookingList from "../components/VaccineBookingList";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'VaccineBooking',
      component: VaccineBooking
    },
    {
      path: '/VaccineBookingList',
      name: 'VaccineBookingList',
      component: VaccineBookingList
    }
  ]
})
