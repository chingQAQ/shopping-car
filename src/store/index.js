import Vue from 'vue'
import Vuex from 'vuex'
import { getMarketData } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    marketList: [],
    cartList: [],
  },
  getters: {
    getCartListLength: state => state.cartList.length,

    totalPrice: state => state.cartList.reduce((acc, currentValue) => acc += currentValue.price, 0).toFixed(2),
    
    isInCart: state => ({ id }) => (
      state.cartList.findIndex(cart => (cart.id === id)) !== -1 
    ),
  },
  mutations: {
    upDateMarketList: (state, payload) => {
      state.marketList = payload.data
    },

    upDateCartList: (state, cartData) => {
      state.cartList = [...state.cartList, cartData]
    },

    cancelInCartList: (state, cartData) => {
      const cancelTarget = state.cartList.indexOf(cartData)
      if (cancelTarget > -1) state.cartList.splice(cancelTarget, 1)
    }
  },
  actions: {
    callMarketApi: ({ commit }) => {
      getMarketData()
        .then(response => {
          commit('upDateMarketList', response)
        })
        .catch(() => {
          throw Error('讀取失敗')
        })
    },

    callMarketCart: ({ commit }, params) => {
      commit('upDateCartList', params)
    },

    cancelProduct: ({ commit }, params) => {
      commit('cancelInCartList', params)
    },
  }
})
