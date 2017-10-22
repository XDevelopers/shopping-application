import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedDevices: [  //this is where chromebooks will be loaded from admin sdk
      { imageUrl: 'https://www.google.com/chrome/assets/common/images/marquee/download-hero-cros.jpg',
        id: 'dsff',
        title: 'Device 1',
        lastSync: '2017-07-17'
      },
      { imageUrl: 'https://www.google.com/chrome/assets/common/images/marquee/download-hero-cros.jpg',
        id: 'twretwert',
        title: 'Device 1',
        lastSync: '2017-07-17'
      },
      { imageUrl: 'https://www.google.com/chrome/assets/common/images/marquee/download-hero-cros.jpg',
        id: 'kjkjkff',
        title: 'Device 1',
        lastSync: '2017-07-17'
      },
      { imageUrl: 'https://www.google.com/chrome/assets/common/images/marquee/download-hero-cros.jpg',
        id: 'as432sfdgdfjklasdf',
        title: 'Device 1',
        lastSync: '2017-07-17'
      },
      { imageUrl: 'https://www.google.com/chrome/assets/common/images/marquee/download-hero-cros.jpg',
        id: 'asdfjkl6735nasdf',
        title: 'Device 1',
        lastSync: '2017-07-17'
      },
      { imageUrl: 'https://www.google.com/chrome/assets/common/images/marquee/download-hero-cros.jpg',
        id: 'asdbn4fjklasdf',
        title: 'Device 1',
        lastSync: '2017-07-17'
      },
      { imageUrl: 'https://support.cloudhq.net/wp-content/uploads/2015/10/Admin_console_and_2__ssh.png',
        id: 'qwertytuiop',
        title: 'Device 2',
        lastSync: '2017-07-17'
      }
    ],
    user: null,
    firebaseSession: null,
    loading: false,
    error: null,
    authInst: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setFirebaseSession (state, payload) {
      state.firebaseSession = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setAuthInst (state, payload) {
      state.authInst = payload
    }
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    },
    googleWidget({commit}, payload) {
      var uiConfig = {
        signInSuccessUrl: '/devices',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      }
      // Initialize the FirebaseUI Widget using Firebase.
      if(payload !== null && payload !== undefined) {
        payload.reset()
        payload.start('#firebaseui-auth-container', uiConfig)
      } else {
        var ui = new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#firebaseui-auth-container', uiConfig)
        commit('setAuthInst', ui)
      }
    },
    setUserSession({commit}, payload) {
      commit('setUser', payload)
    },
    setFirebaseSession({commit}, payload) {
      commit('setFirebaseSession', payload)
    },
    signOut({commit}) {
      firebase.auth().signOut();
      commit('setUser', null)
    }
  },
  getters: {
    loadedDevices (state) {
      return state.loadedDevices.sort((deviceA, deviceB) => {
        return deviceA.lastSync > deviceB.lastSync
      })
    },
    loadedDevice (state) {
      return (deviceId) => {
        return state.loadedDevices.find((device) => {
          return device.id === deviceId
        })
      }
    },
    user (state) {
      return state.user
    },
    firebaseSession (state) {
      return state.firebaseSession
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    authInst (state) {
      return state.authInst
    }
  }
})
