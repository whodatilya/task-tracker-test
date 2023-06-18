import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
      todos
  },
  plugins: [
      createPersistedState()
  ],
})