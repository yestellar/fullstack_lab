import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    addItemToCart(state, product) {
      state.cart.push(product)
    },
    setProductCount(state, product) {
      state.cart.forEach((item, i) => {
        if (item.id === product.id) {
          item.count = product.count
        }
      })
    },
    removeProduct(state, productId) {
      state.cart.forEach((item, i) => {
        if (item.id === productId) {
          console.log(item.name)
          state.cart.splice(i, 1)
        }
      })
    }
  },
  actions: {
     async fetchProducts(ctx) {
       const res = await fetch("products.json")
       const val = await res.json()
       ctx.commit('setProducts', val)
     },
     addItemToCartAction(ctx, product) {
       ctx.commit('addItemToCart', product)
     },
     setProductCountAction(ctx, productId, count) {
       ctx.commit('setProductCount', productId, count)
     }
  },
  getters: {
    allProducts(state) {
      return state.products
    },
    getCartProducts(state) {
      return state.cart
    }
  },
  modules: {
  }
})
