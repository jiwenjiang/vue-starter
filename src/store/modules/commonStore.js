const commonStore = {
  state: {
    userInfo: {}
  },
  mutations: {
    SAVE_USERINFO(state, e) {
      state.userInfo = e
    }
  },
  actions: {
    SAVE_USERINFO(store, e) {
      store.commit('SAVE_USERINFO', e)
    }
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    }
  }
}

export default commonStore
