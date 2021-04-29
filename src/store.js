import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VuexPersist from "vuex-persist";

const vuexLocal = new VuexPersist({
  storage: window.sessionStorage,
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters:{

  },
  plugins:[vuexLocal.plugin],
})
