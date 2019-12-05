import Vue from 'vue'
import Vuex from 'vuex'
import commonStore from '@/store/modules/commonStore'
import mapStore from '@/store/modules/mapStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    commonStore,
    mapStore
  }
})
