import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VaccineBooking from "../components/VaccineBooking";
<<<<<<< HEAD
import VaccineBookingList from "../components/VaccineBookingList";
=======
>>>>>>> 62e158d120eee2c90bf70322770f9e519ac998e2
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
<<<<<<< HEAD
    },
    {
      path: '/VaccineBookingList',
      name: 'VaccineBookingList',
      component: VaccineBookingList
=======
>>>>>>> 62e158d120eee2c90bf70322770f9e519ac998e2
    }
  ]
})
