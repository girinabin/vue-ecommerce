require('./bootstrap');
window.Vue = require('vue')
import router from './router.js'
import store from './store.js'

Vue.component('main-app',require('./mainApp.vue').default)
const app = new Vue({
    el:'#app',
    router,
    store
    
})

