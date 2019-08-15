import Vue from 'vue'
import Router from 'vue-router'

import homeConfig from './home/route.js'
import productsList from './data/products.json'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...homeConfig,
    {
      path: '/category/:id',
      name: 'categoryDetail',
      component: () => import(/* webpackChunkName: 'CategoryDetail' */ './views/CategoryDetail.vue'),
      props (route) {
        const categoryId = route.params.id
        const filteredProducts = {}

        Object.keys(productsList).forEach((key) => {
          const data = productsList[key]
          if (data.categories.includes(categoryId)) {
            filteredProducts[key] = data
          }
        })

        return {
          categoryId,
          productsList: filteredProducts
        }
      }
    },
    {
      path: '/category/',
      name: 'categoriesList',
      component: () => import('./views/CategoriesListAll.vue')
    },
    {
      path: '*',
      name: 'error404',
      component: () => import('./views/Error404.vue')
    }
  ]
})
