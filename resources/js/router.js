import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import test from './test.vue'

// import Accounts Module routes
import accountRoutes from '../../Modules/Accounts/Resources/assets/js/router'
// import Products Module routes
import productRoutes from '../../Modules/Products/Resources/assets/js/router'



const defaultRoutes = [
    {
        path:'/testpage',
        component:test
    }
]


var routes = []
routes = routes.concat(
    defaultRoutes,
    accountRoutes,
    productRoutes
)

export default new Router({
    mode:'history',
    routes
})