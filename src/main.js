import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCaRXG8ZIc8KmhEhmKOuFJRlb3yToA4XBQ",
  authDomain: "app-calendar-b5844.firebaseapp.com",
  databaseURL: "https://app-calendar-b5844.firebaseio.com",
  projectId: "app-calendar-b5844",
  storageBucket: "app-calendar-b5844.appspot.com",
  messagingSenderId: "84651396800",
  appId: "1:84651396800:web:461c6953103240f7a76725"
});

export const db = firebase.firestore();

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.'
Vue.config.warnHandler = function (msg, vm, trace) {
  trace
  if (msg === ignoreWarnMessage) {
    msg = null
    vm = null
    trace = null
  }
}


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify';

// import VueTextareaAutosize from 'vue-textarea-autosize';

// import firebase  from 'firebase/app';
// import 'firebase/firestore'
// Vue.use(VueTextareaAutosize);
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCaRXG8ZIc8KmhEhmKOuFJRlb3yToA4XBQ",
//   authDomain: "app-calendar-b5844.firebaseapp.com",
//   databaseURL: "https://app-calendar-b5844.firebaseio.com",
//   projectId: "app-calendar-b5844",
//   storageBucket: "app-calendar-b5844.appspot.com",
//   messagingSenderId: "84651396800",
//   appId: "1:84651396800:web:461c6953103240f7a76725"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
