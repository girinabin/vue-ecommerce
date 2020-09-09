import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import accountsStore from '../../Modules/Accounts/Resources/assets/js/store/index'
import productsStore from '../../Modules/Products/Resources/assets/js/store/index'


export default new Vuex.Store({
    modules:{
        accountsStore,
        productsStore
    },
    state:{
        name:'nabin'
    }
})