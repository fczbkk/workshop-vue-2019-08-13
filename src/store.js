import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      christmas: 2
    }
  },
  mutations: {

    addToCart (state, productId) {
      Vue.set(state.cart, productId, 1)
    },

    setProductQuantity (state, {productId, quantity}) {
      if (quantity > 0) {
        Vue.set(state.cart, productId, quantity)
      } else {
        Vue.delete(state.cart, productId)
      }
    },

  },

  getters: {

    countProductsInCart (state) {
      return Object.keys(state.cart).length
    },

    countItemsInCart (state) {
      let count = 0

      Object.values(state.cart).forEach(n => count += n)

      return count
    }

  },

  actions: {

    addToCartLater (context, productId) {
      setTimeout(() => {
        context.commit('addToCart', productId)
      }, 2000)
    }

  }
})
