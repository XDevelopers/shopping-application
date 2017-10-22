import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Profile from '../components/User/Account'
import Signout from '../components/User/Signout'
import Profiles from '../components/User/Profiles'
import Device from '../components/Device/Device'
import Devices from '../components/Device/Devices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/accounts/signout',
      name: 'Signout',
      component: Signout
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: Profiles
    },
    {
      path: '/devices/:id',
      name: 'Device',
      props: true,
      component: Device
    },
    {
      path: '/devices',
      name: 'Devices',
      component: Devices
    }
  ],
  mode: 'history'
})
