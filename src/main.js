// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.config.productionTip = false

let app
let config = {
  apiKey: 'AIzaSyDPJcvx_2_O9BNoFs8Wz_EveUmiIhZ8Wzo',
  authDomain: 'project-e9bf5.firebaseapp.com',
  databaseURL: 'https://project-e9bf5.firebaseio.com',
  projectId: 'project-e9bf5',
  storageBucket: 'project-e9bf5.appspot.com',
  messagingSenderId: '992917563573'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
