import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
     async fetchProducts(ctx) {
       const res = await fetch("products.json")
       const val = await res.json()
       ctx.commit('setProducts', val)
     }
  },
  getters: {
    allProducts(state) {
      return state.products
    }
  },
  modules: {
  }
})
