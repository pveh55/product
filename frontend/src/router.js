
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import ProductProductManager from "./components/listers/ProductProductCards"
import ProductProductDetail from "./components/listers/ProductProductDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/products/products',
                name: 'ProductProductManager',
                component: ProductProductManager
            },
            {
                path: '/products/products/:id',
                name: 'ProductProductDetail',
                component: ProductProductDetail
            },



    ]
})
