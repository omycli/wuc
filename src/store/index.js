import Vue from 'vue'
import Vuex from 'vuex'

import pay from './modules/pay'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    pay: {
      namespaced: true,
      ...pay
    }
  }
})

export default store
