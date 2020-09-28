import Vue from 'vue'
import Vuex from 'vuex'
import { getMarketData } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    marketList: [],
    carList: [], 
  },
  getters: {
    getCarListLength: function(state) {
      return state.carList.length
    },
    isCar: function(state) {
      return state.marketList.findIndex(function(item) {
        return state.carList.map(function(car) {
          return item === car
        })
      })
    },
  },
  mutations: {
    upDateMarketList: function (state, payload) {
      state.marketList = payload.data
    },
    upDateCarList: function (state, carData) {
      state.carList = state.carList.concat(carData)
    },
  },
  actions: {
    callMarketApi: function ({ commit }) {
      getMarketData()
        .then(response => {
          commit('upDateMarketList', response)
        })
    },
    callMarketCar: function ({ commit }, params) {
      commit('upDateCarList', params)
    },
  }
})
