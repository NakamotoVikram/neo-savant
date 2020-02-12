import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import accounts from './modules/accounts'
import networks from './modules/networks'
import files from './modules/files'
import contracts from './modules/contracts'
import events from './modules/events'
// import console from './modules/console'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'savant-ide',
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    accounts,
    networks,
    files,
    contracts,
    events
    // console
  },
  plugins: [vuexPersist.plugin]
})
