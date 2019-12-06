import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    authenticated: false
  },
  getters: {
    loading: state => {
      return state.loading;
    }
  },
  mutations: {
    load (state) {
      state.loading = true
      setTimeout(() => {
        state.loading = false;
        state.authenticated = true;
        router.push('home');
      }, 1000);
    }
  },
  actions: {
    load ({ commit }) {
      commit('load')
    }
  },
  modules: {
  }
})
