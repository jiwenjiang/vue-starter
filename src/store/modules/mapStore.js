const mapStore = {
  state: {
    mapId: 1
  },
  mutations: {
    SAVE_USERINFO(state, e) {
      state.mapId = e
    }
  },
  actions: {
    SAVE_USERINFO(store, e) {
      store.commit('SAVE_USERINFO', e)
    }
  },
  getters: {
    mapId(state) {
      return state.mapId
    }
  }
}

export default mapStore
