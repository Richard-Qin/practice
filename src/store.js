import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: '数据',
    data: '新的数据'
  },
  mutations: {
    newCount(state, str) {
      state.count = '新数据' + str
    }
  },
  getters: {
    addCount(state) {
      return state.data + '我是得到的数据'
    }
  },
  actions: {
    newCount({ commit }) {
      commit('newCount', '异步操作')
    }
  }
})
