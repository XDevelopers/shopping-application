// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import router from './router'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({
  el: '#app',
  router,
  store,
  firebaseui,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyDUNMKH3pPDs1FmW1LZckzku5EJxqVqJnk",
      authDomain: "crphotographs-c79d7.firebaseapp.com",
      databaseURL: "https://crphotographs-c79d7.firebaseio.com",
      projectId: "crphotographs-c79d7",
      storageBucket: "crphotographs-c79d7.appspot.com",
      messagingSenderId: "935323738559"
    })

    let fb = firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('setUserSession', user)
      } else {
        this.$router.push('/')
      }

      this.$store.dispatch('setFirebaseSession', fb)
   })

  }
})
